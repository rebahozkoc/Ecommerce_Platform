import requests
categoryURL = "https://www.vivense.com/koltuk-takimlari-mobilyalari.html?ref=menu_text"
cateforyFileName = "koltuk.json"

import json
from bs4 import BeautifulSoup

r = requests.get(categoryURL)
result = r.text
soup = BeautifulSoup(result, "lxml")
product_list1 = soup.find(class_="product-list")
product_list = soup.find_all(class_="product-card product-content parent")
data_file = open(cateforyFileName, "a", encoding="UTF-8")

for i in product_list:
    product_name = i.attrs["data-product-name"]
    price = i.attrs["data-product-price"]
    image = i.find(class_="product_img").findChild().attrs["data-main-img"]
    data = {'productName': product_name, "price": price, "image": image}
    json.dump(data, data_file, ensure_ascii=False)
    data_file.write(",\n")
