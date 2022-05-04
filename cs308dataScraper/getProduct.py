import requests
import random
productURL = "https://www.vivense.com/lizbon-koltuk-takimi-kaz-ayakli-modeli.html"
productsFileName = "koltuklar.json"

import json
from bs4 import BeautifulSoup

r = requests.get(productURL)
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

data_file = open(productsFileName, "a", encoding="UTF-8")



data = {'title': title, "price": price, "description": description, "warrantyStatus": warrantyStatus, "distributor": distributor, "stock": stock}
json.dump(data, data_file, ensure_ascii=False)
data_file.write(",\n")
