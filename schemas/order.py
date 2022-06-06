from datetime import datetime
from pydantic import BaseModel, validator
from pydantic import Extra
from schemas import Product, AddressBase, CreditBase
from models.order import OrderStatusEnum

# Shared properties
class Order(BaseModel):
    quantity: int
    product: Product
    address: AddressBase
    credit: CreditBase
    order_status: OrderStatusEnum

    class Config:
        orm_mode = True


class OrderShoppingCart(BaseModel):
    address_id: int
    credit_id: int

    class Config:
        extra = Extra.allow
