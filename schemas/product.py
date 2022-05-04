from typing import Optional, List

from pydantic import BaseModel, validator
from schemas.comment import CommentBase
from utilities.image import ImageUtilities


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
