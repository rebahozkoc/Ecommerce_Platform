from typing import Optional, List

from pydantic import BaseModel, validator
from schemas.category import CategoryBase, SubCategoryBase
from schemas.comment import CommentBase
from utilities.image import ImageUtilities
from schemas.base import CustomBase

class ProductPhotoBase(BaseModel):
    id: int
    photo_url: str
    is_active: bool

    @validator("photo_url")
    def static_image(cls, photo_url):
        return ImageUtilities.get_image_url(photo_url)

    class Config:
        orm_mode = True


# Shared properties
class ProductBase(BaseModel):
    id: int
    photos: List[ProductPhotoBase] = []

    class Config:
        orm_mode = True

class Product(BaseModel):
    id: int
    title: str
    description: str
    stock: int
    price: float
    model: str
    number: str
    category_title: str
    subcategory_title: str

    photos: List[ProductPhotoBase] = []

    class Config:
        orm_mode = True


# Properties to receive via API on creation
class ProductCreate(CustomBase):
    title: str
    description: str
    stock: int
    price: float
    model: str
    number: str
    distributor: str
    category_id: int
    subcategory_id: int
    

    class Config:
        orm_mode = True
        exclude = {"category_id", "subcategory_id"}



# Properties to receive via API on update
class ProductUpdate(ProductCreate):
    pass


class ProductInDBBase(ProductBase):
    pass

    class Config:
        orm_mode = True
