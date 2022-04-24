from crud.base import CRUDBase
from models.category import Category, SubCategory
import schemas
from fastapi.encoders import jsonable_encoder
import models
from typing import Any, Optional, List
from sqlalchemy.orm import Session, joinedload

from sqlalchemy.orm import Session


class CRUDCategory(
    CRUDBase[schemas.CategoryBase, schemas.CategoryCreate, schemas.CategoryUpdate]
):
    def get(self, db: Session, field: str, value: Any) -> Optional[Category]:
        model_attribute = getattr(self.model, field)  # get attribute
        model_filter = model_attribute == value
        data = (
            db.query(Category)
            .filter(model_filter)
            .options(joinedload(models.Category.subcategories))
            .first()
        )

        if not data:
            return None
        return data

    def get_multi(
        self, db: Session, *, skip: int = 0, limit: int = 100
    ) -> List[Category]:
        return (
            db.query(models.Category)
            .options(joinedload(models.Category.subcategories))
            .offset(skip)
            .limit(limit)
            .all()
        )

    def create(self, db: Session, *, obj_in: schemas.CategoryCreate) -> Category:
        obj_in_data = jsonable_encoder(obj_in)
        db_obj = self.model(**obj_in_data)  # type: ignore
        if self.get(db=db, field="title", value=obj_in.title):
            return None
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj


category = CRUDCategory(Category)


class CRUDSubCategory(
    CRUDBase[
        schemas.SubCategoryBase, schemas.SubCategoryCreate, schemas.SubCategoryUpdate
    ]
):
    pass


subcategory = CRUDSubCategory(SubCategory)
