from typing import List, Optional

from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import Session , joinedload
import crud
from crud.base import CRUDBase

from models.comment import Comment
from schemas.comment import CommentBase, CommentList

"""
    def get_multi(
        self, db: Session, *, skip: int = 0, limit: int = 100
    ) -> CommentList:
        return db.query(self.model).offset(skip).limit(limit).all()

    def update(
        self,
        db: Session,
        *,
        db_obj: CommentBase,
        obj_in: Union[UpdateSchemaType, Dict[str, Any]]
    ) -> ModelType:
        obj_data = jsonable_encoder(db_obj)
        if isinstance(obj_in, dict):
            update_data = obj_in
        else:
            update_data = obj_in.dict(exclude_unset=True)
        for field in obj_data:
            if field in update_data:
                setattr(db_obj, field, update_data[field])
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

"""

class CRUDComment(CRUDBase[CommentBase, CommentList, CommentBase]):
   

    def get(self, db: Session, id: int) -> Optional[CommentBase]:
        return db.query(self.model).filter(self.model.id == id).first()

    def get_multi_by_product_id(
        self, db: Session, *,id: int, skip: int = 0, limit: int = 100
        ) -> CommentList:
        return db.query(self.model).filter(self.model.product_id == id).offset(skip).limit(limit).all()

    def create(self, db: Session, *, obj_in: CommentBase) -> CommentBase:
        obj_in_data = jsonable_encoder(obj_in)
        db_obj = self.model(**obj_in_data)  # type: ignore
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    

    def remove(self, db: Session, *, id: int) -> CommentBase:
        obj = db.query(self.model).get(id)
        db.delete(obj)
        db.commit()
        return obj


comment = CRUDComment(Comment)