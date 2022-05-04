from crud.base import CRUDBase
from sqlalchemy.orm import Session
from typing import List
from models.product import Product, ProductPhoto, ProductRate
import schemas
from fastapi import status, HTTPException, UploadFile
from utilities.image import ImageUtilities
from sqlalchemy.sql import func


class CRUDProduct(
    CRUDBase[schemas.ProductBase, schemas.ProductCreate, schemas.ProductUpdate]
):
    def get_comments(
        self, db: Session, id: int, skip: int, limit: int
    ) -> List[schemas.CommentBase]:
        data = db.query(Product).filter(Product.id == id).first()
        if not data:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail={"message": f"Product does not exists"},
            )
        return data.comments.offset(skip).limit(limit).all()

    def add_photo(self, db: Session, product: Product, photo: UploadFile):
        photo_url = ImageUtilities.save_image(photo, "products")
        product_photo = ProductPhoto(photo_url=photo_url, product_id=product.id)
        db.add(product_photo)
        db.commit()
        db.refresh(product_photo)
        return product_photo

    def remove_photo(self, db: Session, photo_id: int):
        db_obj = db.query(ProductPhoto).filter(ProductPhoto.id == photo_id).first()

        if not db_obj:
            return None
        ImageUtilities.remove_image(path=db_obj.photo_url)
        db.delete(db_obj)
        db.commit()
        return db_obj
    
    def add_rate(self, db: Session, user_id: int, product_id: int, rate: int):
        product_rate = ProductRate(user_id=user_id, product_id=product_id, rate=rate)
        db.add(product_rate)
        db.commit()
        db.refresh(product_rate)
        return product_rate
    
    def get_avg_rate(self, db: Session, id: int):
        return db.query(func.avg(ProductRate.rate).label('average')).filter(ProductRate.id==id)



product = CRUDProduct(Product)
