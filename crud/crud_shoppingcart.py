from sqlalchemy.orm import Session
from fastapi.encoders import jsonable_encoder
from crud.base import CRUDBase
from models import ShoppingCart, User, Product
from schemas.shopping_cart import ShoppingCartAddProduct


class CRUDShoppingCart(
    CRUDBase[ShoppingCart, ShoppingCartAddProduct, ShoppingCartAddProduct]
):
    def get(self, db: Session, user: User, product_id: int):
        data = (
            db.query(ShoppingCart)
            .filter(
                ShoppingCart.user_id == user.id, ShoppingCart.product_id == product_id
            )
            .first()
        )
        return data

    def get_multi(self, db: Session, user: User):
        return user.shopping_cart_products

    def add_product(self, db: Session, user: User, product: ShoppingCartAddProduct):
        product.user_id = user.id
        obj_in_data = jsonable_encoder(product)
        added_product = ShoppingCart(**obj_in_data)
        db.add(added_product)
        db.commit()
        db.refresh(added_product)
        return added_product

    def get_product(self, db: Session, user: User, product_id: int):
        data = (
            db.query(ShoppingCart)
            .filter(
                ShoppingCart.user_id == user.id, ShoppingCart.product_id == product_id
            )
            .first()
        )
        return data


shopping_cart = CRUDShoppingCart(ShoppingCart)
