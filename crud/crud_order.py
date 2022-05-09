from sqlalchemy.orm import Session
from fastapi.encoders import jsonable_encoder
from crud.base import CRUDBase
from models import Order, User
from schemas.order import OrderShoppingCart
import crud, models, schemas
from typing import List


class CRUDOrder(CRUDBase[Order, OrderShoppingCart, OrderShoppingCart]):
    def create_order(
        self, db: Session, current_user: User, order_details: schemas.OrderShoppingCart
    ):
        shopping_cart_items = crud.shopping_cart.get_multi(db=db, user=current_user)
        json_data = None

        for item in shopping_cart_items:
            order = models.Order(
                order_status="PROCESSING",
                product_id=item.product_id,
                user_id=item.user_id,
                quantity=item.quantity,
                address_id=order_details.address_id,
                credit_id=order_details.credit_id,
            )
            db.add(order)
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
