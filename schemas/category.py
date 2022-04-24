from typing import List

from pydantic import BaseModel, Field


"""
SubCategory
"""


class SubCategoryBase(BaseModel):
    title: str = Field(alias="subcategory_title")

    class Config:
        orm_mode = True
        allow_population_by_field_name = True


class SubCategoryCreate(SubCategoryBase):
    pass


class SubCategoryUpdate(SubCategoryBase):
    pass


class SubCategoryInDBBase(SubCategoryBase):
    pass


class SubCategoryList(BaseModel):
    categories: List[SubCategoryBase]

    class Config:
        orm_mode = True
        allow_population_by_field_name = True


"""
Category schemas
"""


class CategoryBase(BaseModel):
    title: str = Field(alias="category_title")

    class Config:
        orm_mode = True
        allow_population_by_field_name = True


class CategoryCreate(CategoryBase):
    title: str


class CategoryUpdate(CategoryCreate):
    pass


class CategoryShow(CategoryBase):
    id: int
    subcategories: List[SubCategoryBase]
