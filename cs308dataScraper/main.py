from time import sleep

import requests

from getProduct import getProduct

categoryURL = "https://www.vivense.com/koltuk-takimlari-mobilyalari.html?ref=menu_text"
cateforyFileName = ".json"
categoryName = "Living Room"
subcategoryName = "Sofa Set"
import json
from bs4 import BeautifulSoup

r = requests.get(categoryURL)
result = r.text
soup = BeautifulSoup(result, "lxml")
product_list = soup.find_all(class_="product-card product-content parent")
data_file = open(cateforyFileName, "a", encoding="UTF-8")

for i in product_list:
    product_name = i.find(class_="product-name").get_text()
    productUrl = "https://www.vivense.com/" + i.find(class_="product-link").findChild(class_="product-link").attrs["href"]
    getProduct(productUrl, cateforyFileName, categoryName, subcategoryName)
    sleep(1)
    print(product_name)
    """
    product_name = i.attrs["data-product-name"]
    price = i.attrs["data-product-price"]
    image = i.find(class_="product_img").findChild().attrs["data-main-img"]
    data = {'productName': product_name, "price": price, "image": image}
    json.dump(data, data_file, ensure_ascii=False)
    data_file.write(",\n")
    """
