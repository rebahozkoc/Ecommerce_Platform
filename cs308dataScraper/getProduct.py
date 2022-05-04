import requests
import random

import json
from bs4 import BeautifulSoup

def getProduct(url, fileName, category, subCategory):
    r = requests.get(url)
    result = r.text
    soup = BeautifulSoup(result, "lxml")

    title = soup.find(class_="product-title").text
    stock = random.randint(0, 100)
    price = int(soup.find(class_="price new-price").attrs["data-value"])
    description = ""
    warrantyStatus = str(random.randint(1, 5)) + "year(s)"
    distributor = "Voidture Inc."

    for i in soup.find(class_="desctab").findAll(name="tr"):
        description += ": ".join([j.text for j in i])
        description += "\n"

    data_file = open(fileName, "a", encoding="UTF-8")

    data = {'title': title, "price": price, "description": description, "warrantyStatus": warrantyStatus, "distributor": distributor, "stock": stock, "category": category, "subCategory": subCategory}
    json.dump(data, data_file, ensure_ascii=False)
    data_file.write(",\n")
