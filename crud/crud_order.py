from sqlalchemy.orm import Session
from fastapi.encoders import jsonable_encoder
from crud.base import CRUDBase
from models import Order, User
from schemas.order import OrderShoppingCart
import crud, models, schemas
from typing import List
import json
from utilities.gen_invoice import gen_invoice
import utilities.sendMail
import reportlab
import pdfkit
import json
import utilities.gen_invoice


class CRUDOrder(CRUDBase[Order, OrderShoppingCart, OrderShoppingCart]):
    def create_order(
        self, db: Session, current_user: User, order_details: schemas.OrderShoppingCart
    ):
        shopping_cart_items = crud.shopping_cart.get_multi(db=db, user=current_user)

        item_list = schemas.ShoppingCartList(data=shopping_cart_items)
        item_list = item_list.dict()
        # gorkem = (
        #    db.query(models.Address)
        #    .filter(models.Address.id == order_details.address_id)
        #    .first()
        # )
        # item_list["address"] = jsonable_encoder(gorkem)
        # path_wkthmltopdf = "/usr/local/bin/wkhtmltopdf"

        ## Load the json data file
        # usermail = "yasinugur.cs@gmail.com"
        # username = usermail.split("@")[0]

        ## Create the invoice pdf
        # return_URL = gen_invoice(item_list, username)

        # css = "example.css"
        # options = {"enable-local-file-access": True}

        # files = [return_URL.replace("html", "html")]
        # content = "Hello Dear user, \n This is an invoice for your recent purchase. \n Thank you for your business."

        # utilities.sendMail.send_mail(
        #    usermail, "Your Invoice from Voidture Inc.", content, files
        # )

        new_order = models.Order(
            user_id=current_user.id,
            address_id=order_details.address_id,
            credit_id=order_details.credit_id,
        )

        db.add(new_order)
        db.commit()

        for item in shopping_cart_items:
            orderitem = models.OrderItem(
                order_status="PROCESSING",
                order_id=new_order.id,
                product_id=item.product_id,
                quantity=item.quantity,
            )
            db.add(orderitem)
            crud.product.decrease_stock(
                db=db, product_id=item.product_id, quantity=item.quantity
            )

        db.commit()

        crud.shopping_cart.remove_all(db=db, user=current_user)

    def get_multi(
        self, db: Session, *, user_id: int, skip: int = 0, limit: int = 100
    ) -> List[Order]:
        return (
            db.query(Order)
            .filter(Order.user_id == user_id)
            .offset(skip)
            .limit(limit)
            .all()
        )


order = CRUDOrder(Order)
