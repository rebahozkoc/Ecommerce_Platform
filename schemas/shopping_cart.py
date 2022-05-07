from datetime import datetime
from pydantic import BaseModel, validator
from pydantic import Extra
from schemas import Product

# Shared properties
class ShoppingCart(BaseModel):
    quantity: int
    product: Product

    class Config:
        orm_mode = True


class ShoppingCartAddProduct(BaseModel):
    product_id: int
    quantity: int
    created_at: datetime = datetime.utcnow()

    class Config:
        extra = Extra.allow


class ShoppingCartUpdateProduct(BaseModel):
    product_id: int
    quantity: int
