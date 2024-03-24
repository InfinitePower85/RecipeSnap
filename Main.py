import os
import requests
import imageio as iio
import json
from IPython.display import display, Image
from PIL import Image
import pillow_heif
from py_edamam import PyEdamam
import textdistance as td
import math
import numbers
import firebase_admin

from fastapi import FastAPI, UploadFile
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import os
import base64
from typing import List
ACCOUNT_ID = "b0fb19e4e378abe3001cbec81c2a71f5"
AUTH_TOKEN = "q2i_bqwNjbY3DwyHoMUeo3BEFaw6qxc97aGjwxJR"
APP_ID = "6b661ac9"
APP_KEY = "c0d96c7a8b663e432b6361134325f55f"
app = FastAPI()

# Set up CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Update with your React app's URL
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],  # Specify allowed methods
    allow_headers=["*"],
)
@app.post("/oo")
async def stuff(hi):
    return {"hello": str(hi)}

@app.get("/")
async def main():
    print("asdfjkdsajk")
    return {"message": "Hello World"}
# Define an API endpoint for image upload
@app.post("/upload")
async def upload_image(file: UploadFile):
    print("hello world 2 ajkfdsaf")
    try:
        # Save the uploaded image to a local directory
        upload_directory = "uploaded_images"
        os.makedirs(upload_directory, exist_ok=True)
        file_path = os.path.join(upload_directory, file.filename)
        with open(file_path, "wb") as f:
            f.write(file.file.read())

        return JSONResponse(content={"message": "Image uploaded successfully"}, status_code=200)
    except Exception as e:
        return JSONResponse(content={"error": str(e)}, status_code=500)

# Define an API endpoint to get a list of uploaded images
@app.get("/images")
async def get_images():
    image_directory = "uploaded_images"
    images = []
    for file_name in os.listdir(image_directory):
        file_path = os.path.join(image_directory, file_name)
        with open(file_path, "rb") as f:
            image_data = base64.b64encode(f.read()).decode("utf-8")
            images.append({"name": file_name, "data": image_data})
    return images

# Find name from ingredient
def extractRecipeIngredients(word):
    words = word.split()
    if words[0].lower() == "optional":
        return ""
    label = ""
    start = 0
    end = len(words)
    for i in range(len(words)):
        try:
            int(words[i])
            start = 2
        except:
            start = start
        if i >= start and i < end:
            if ',' in words[i]:
                end = i
                label += words[i] + " "
            elif words[i].lower() == 'for':
                end = i
            else:
                label += words[i] + " "
    return label[:len(label)-1]

# Finds price of an item by not requiring the exact name (e.g. lobsters vs lobster)
def closestWordDict(map, word, link):
    maxHamming = 0
    index = 0
    # print(itemPrices.content[i]["Description"])
    for i in range(len(map)):
        words = word.split()
        descriptions = map[i]["Description"].split()
        for w in words:
            for d in descriptions:
                # index = i if td.hamming.normalized_similarity(map[i]["Description"], word) > td.hamming.normalized_similarity(map[index]["Description"], word) else index
                dist = td.hamming.normalized_similarity(d, w)
                if dist > maxHamming:
                    maxHamming = dist
                    index = i

    result = {}
    threshold = 0.3 # Words are too apart and therefore not found
    if td.hamming.normalized_similarity(map[index]["Description"], word) <= threshold:
        return result
    result["Description"] = map[index]["Description"]
    result["Price"] = map[index]["Price"]
    result["Store Discount"] = map[index]["Store Discount"]
    result["Loyalty Discount"] = map[index]["Loyalty Discount"]
    result["Digital Coupon"] = map[index]["Digital Coupon"]
    result["Label"] = word
    result["UPC"] = map[index]["UPC"]
    # result["Link"] = link
    return result

model = "@cf/microsoft/resnet-50"
# model = "@cf/unum/uform-gen2-qwen-500m"

# heif_file = pillow_heif.read_heif("image.HEIC")
# image = Image.frombytes(
#     heif_file.mode,
#     heif_file.size,
#     heif_file.data,
#     "raw",
# )

# image.save("./image.png", format("png"))

with open("image.png", 'rb') as image_file:
    image_bytes = image_file.read()

maxFood = "BURRITO"

response = requests.post(
    f"https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/{model}",
    headers={"Authorization": f"Bearer {AUTH_TOKEN}"},
    data=image_bytes,
    # prompt="What is inside this food?"
)

inference = response.json()

maxScore = 0
maxFood = ""
for food in inference["result"]:
    if(food["score"] > maxScore):
        maxScore = food["score"]
        maxFood = food["label"]

request_url = "https://api.edamam.com/search?q=" + maxFood + "&app_id=" + APP_ID + "&app_key=" + APP_KEY
r = requests.get(request_url)
recipe_list = json.loads(r.text)["hits"]
# number = []
# for r in recipe_list:
#     number.append(1)
#     print(int(len(number))-1,(r["recipe"]["label"]))

items_map = {}
for i, item in enumerate(recipe_list):
    items_map[i] = item
    # print(item["recipe"])

# Get Wakefern recipes and put them into itemsPrices_map
itemPrices = requests.get(
    "https://apimdev.wakefern.com/mockexample/V1/getItemDetails",
    headers={'User-Agent':'PostmanRuntime/7.36.3', 'Ocp-Apim-Subscription-Key':'4ae9400a1eda4f14b3e7227f24b74b44'}
)

itemsPrices_list = json.loads(itemPrices.content)
itemsPrices_map = {}
for i, item in enumerate(itemsPrices_list):
    itemsPrices_map[i] = item

result = {}
for ingredient in items_map[0]["recipe"]["ingredients"]:
    # print(ingredient["text"])
    label = extractRecipeIngredients(ingredient["text"])
    print(items_map[0]["recipe"]["shareAs"])
    if ingredient["text"] != "":
        result[ingredient["text"]] = closestWordDict(itemsPrices_map, label, items_map[0]["recipe"]["shareAs"])
result[items_map[0]["recipe"]["shareAs"]] = ""

with open("result.json", "w") as outfile: 
    json.dump(result, outfile)