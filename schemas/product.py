from typing import Optional, List

from pydantic import BaseModel
from schemas.comment import CommentBase

# Shared properties
class ProductBase(BaseModel):
    id: int
    comments: List[CommentBase]

    class Config:
        orm_mode = True


# Properties to receive via API on creation
class ProductCreate(ProductBase):
    pass

# Properties to receive via API on update
class ProductUpdate(ProductBase):
    pass


class ProductInDBBase(ProductBase):
    pass

    class Config:
        orm_mode = True