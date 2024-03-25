# HackRU - Spring 2024

Submitted by: **Andy Chang, Terry Nguyen, Artem Torubarov, Laurent Drejaj**

Time spent: **24** hours spent in total

## Summary

**RecipeSnap** is a mobile app that **allows you to take a picture of food, identify it, and generate a list of ingredients and where you can purchase it**

Take a look at our Devpost! https://devpost.com/software/recipesnap


## Application Features

<!-- (This is a comment) Please be sure to change the [ ] to [x] for any features you completed.  If a feature is not checked [x], you might miss the points for that item! -->
Camera:
- Take picture
- Upload picture
- Flip camera

AI:
- Utilized Microsoft's resnet-50 image classification model via Cloudflare API to classify the photographed food. 

Ingredients:
- Used Edamam to pull a list of ingredients for the recipe of food
- Used Wakefern API to access ingredients available in local grocery stores. 

## Video Demo

https://www.youtube.com/watch?v=2XbcE2_sZZU&t=7s


## License

Copyright **2024** **Andy Chang, Terry Nguyen, Artem Torubarov, Laurent Drejaj**

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
