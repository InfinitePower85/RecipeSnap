import os
import requests
import imageio as iio
import json
from IPython.display import display, Image
from PIL import Image
import pillow_heif



ACCOUNT_ID = "b0fb19e4e378abe3001cbec81c2a71f5"

model = "@cf/microsoft/resnet-50"

heif_file = pillow_heif.read_heif("image.HEIC")
image = Image.frombytes(
    heif_file.mode,
    heif_file.size,
    heif_file.data,
    "raw",
)

image.save("./image.png", format("png"))

with open("image.png", 'rb') as image_file:
    image_bytes = image_file.read()

response = requests.post(
    f"https://api.cloudflare.com/client/v4/accounts/{ACCOUNT_ID}/ai/run/{model}",
    headers={"Authorization": f"Bearer {AUTH_TOKEN}"},
    data=image_bytes
)

inference = response.json()
# inference["result"]

with open("result.json", "w") as outfile:
    json.dump(inference, outfile)
    # outfile.write(inference)