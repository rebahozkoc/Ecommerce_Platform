import os
import time

import requests

import requests
import random

import json
from bs4 import BeautifulSoup


def getImg(url, productId):
    r = requests.get(url)
    result = r.text
    soup = BeautifulSoup(result, "lxml")

    imgs = soup.find(class_="ws_thumbs")

    imgNum= 0
    try:
        os.mkdir(str(productId))
    except OSError as error:
        print(error)
    for img in imgs.findAll(name="img"):
        imgUrl = img.get("src")
        imgNum += 1
        img_data = requests.get(imgUrl).content
        print("Downlaoding", imgUrl)
        with open(str(productId) + "/" + str(imgNum) + ".jpg", 'wb') as handler:
            handler.write(img_data)
        time.sleep(0.1)
