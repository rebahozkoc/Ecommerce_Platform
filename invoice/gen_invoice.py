import bs4
import json


def trChar(text):
    tr_chars = ["ç", "ğ", "ı", "ö", "ü", "ş", "Ç", "Ğ", "İ", "Ö", "Ş", "Ü"]
    en_chars = ["c", "g", "i", "o", "u", "s", "C", "G", "I", "O", "S", "U"]
    for i in text:
        if i in tr_chars:
            text = text.replace(i, en_chars[tr_chars.index(i)])
    return text


def gen_invoice(jsonFile, username):
    """Modify the invoice html file to include the invoice data"""
    orders_json = json.load(open(jsonFile, "r", encoding='utf-8'))

    address_dict = orders_json["data"][0]["address"]
    personal_info = address_dict["personal_name"] + "\n" + address_dict["phone_number"] + "\n" +\
                    address_dict["full_address"] +\
                    address_dict["postal_code"] + address_dict["province"] + " " + address_dict["city"] + \
                    address_dict["country"] + "\n" + "09-05-2022"


    # load the file
    with open("file.html") as inf:
        txt = inf.read()
        soup = bs4.BeautifulSoup(txt, "html.parser")
        invoice = soup.find(class_="invoice")
        pi = invoice.find(id="personal_info")

        t = soup.new_tag("p")
        t.string = address_dict["personal_name"]
        pi.append(t)
        t = soup.new_tag("p")
        t.string = address_dict["phone_number"]
        pi.append(t)

        t = soup.new_tag("p")
        t.string = address_dict["full_address"]
        pi.append(t)

        t = soup.new_tag("p")
        t.string = address_dict["postal_code"] + " " + address_dict["province"] + " " + address_dict["city"] + " " + address_dict["country"]
        pi.append(t)

        t = soup.new_tag("p")

        t.string = "09-05-2022"
        pi.append(t)
        invoice_items = invoice.find(class_="invoice-items").find("tbody")
        total_price = 0
        for order in orders_json["data"]:
            product = order["product"]
            quantity = order["quantity"]
            price = product["price"]
            title = trChar(product["title"])
            photo = product["photos"][0]["photo_url"]
            subtotal = quantity * price
            total_price += subtotal
            new_tag = soup.new_tag("tr")
            t1 = soup.new_tag("td")

            img = soup.new_tag("img")
            img["src"] = photo
            img["width"] = "100"
            t1.append(img)
            new_tag.append(t1)

            t = soup.new_tag("td")
            t.string = title
            new_tag.append(t)

            k = soup.new_tag("td", class_= "alignright")
            k.string = str(quantity) + " x " + str(price) + "$" + " = " + str(subtotal) + "$"
            new_tag.append(k)
            invoice_items.append(new_tag)

        new_tag = soup.new_tag("tr", class_="total")
        t1 = soup.new_tag("td", class_="alignright")
        t1.string = "Total" + " = " + str(total_price) + "$"
        t1["width"] = "80%"
        new_tag.append(t1)

        invoice.append(new_tag)


    # create new link
    #new_link = soup.new_tag("link", rel="icon", type="image/png", href="img/tor.png")
    # insert it into the document
    #soup.head.append(new_link)

    # save the file again
    with open(username + "invoice.html", "w", encoding='utf-8') as outf:
        outf.write(str(soup))
