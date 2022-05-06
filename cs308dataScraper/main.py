from time import sleep

import requests

import getImg
from getProduct import getProduct

categoryURL = "https://www.vivense.com/koltuk-takimlari-mobilyalari.html?ref=menu_text"
fileName = "Sofa Sets 0-0.json"
category_id = 0
subcategory_id = 0
model = "Living Room"
number = "Sofa Set"
import json
from bs4 import BeautifulSoup

r = requests.get(categoryURL)
result = r.text
soup = BeautifulSoup(result, "lxml")
product_list = soup.find_all(class_="product-card product-content parent")
data_file = open(fileName, "a", encoding="UTF-8")

productId = 0
for i in product_list:
    product_name = i.find(class_="product-name").get_text()
    productUrl = "https://www.vivense.com/" + i.find(class_="product-link").findChild(class_="product-link").attrs["href"]
    getProduct(productUrl, fileName, category_id, subcategory_id, model, number)

    sleep(0.1)
    getImg.getImg(productUrl, productId)
    print(product_name)
    productId += 1
    """
    product_name = i.attrs["data-product-name"]
    price = i.attrs["data-product-price"]
    image = i.find(class_="product_img").findChild().attrs["data-main-img"]
    data = {'productName': product_name, "price": price, "image": image}
    json.dump(data, data_file, ensure_ascii=False)
    data_file.write(",\n")
    """
