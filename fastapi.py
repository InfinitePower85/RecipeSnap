from fastapi import FastAPI, UploadFile
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import os
import base64
from typing import List

app = FastAPI()

# Set up CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Update with your React app's URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define an API endpoint for image upload
@app.post("/upload")
async def upload_image(file: UploadFile):
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
