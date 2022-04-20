from crud.base import CRUDBase
from sqlalchemy.orm import Session
from typing import List
from models.product import Product
import schemas
from fastapi import status, HTTPException

class CRUDProduct(CRUDBase[schemas.ProductBase, schemas.ProductCreate, schemas.ProductUpdate]):
    def get_comments(self, db: Session, id: int, skip: int, limit: int) -> List[schemas.CommentBase]:
        data = db.query(Product).filter(Product.id == id).first()
        if not data:
            raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                    detail={"message": f"Product does not exists"})
        return data.comments.offset(skip).limit(limit).all()


product = CRUDProduct(Product)