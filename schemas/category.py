from typing import Optional, List

from pydantic import BaseModel, Field


"""
SubCategory
"""


class SubCategoryBase(BaseModel):
    id: int = Field(alias="subcategory_id")
    title: str = Field(alias="subcategory_title")

    class Config:
        orm_mode = True
        allow_population_by_field_name = True


class SubCategoryCreate(BaseModel):
    title: str

    class Config:
        orm_mode = True
        allow_population_by_field_name = True


class SubCategoryUpdate(SubCategoryCreate):
    category_id: Optional[int] = None


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


class CategoryORM(CategoryBase):
    id: int = Field(alias="category_id")


class CategoryCreate(CategoryBase):
    title: str


class CategoryUpdate(CategoryCreate):
    pass


class CategoryShow(CategoryBase):
    id: int
    subcategories: List[SubCategoryBase]


class SubCategoryShow(SubCategoryBase):
    id: int
    categories: List[CategoryORM]
