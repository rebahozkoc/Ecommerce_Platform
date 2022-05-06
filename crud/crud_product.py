from crud.base import CRUDBase
from sqlalchemy.orm import Session, joinedload
from typing import List, Any, Optional
from models.product import Product, ProductPhoto, ProductRate
import schemas
from fastapi.encoders import jsonable_encoder
from fastapi import status, HTTPException, UploadFile
from utilities.image import ImageUtilities
from sqlalchemy.sql import func
from models import CategorySubCategory


class CRUDProduct(
    CRUDBase[schemas.ProductBase, schemas.ProductCreate, schemas.ProductUpdate]
):
    def get(self, db: Session, field: str, value: Any) -> Optional[Product]:
        model_attribute = getattr(self.model, field)  # get attribute
        model_filter = model_attribute == value
        data = (
            db.query(Product)
            .filter(model_filter)
            .options(joinedload(Product.category_subcategory))
            .first()
        )

        # TODO: Not useful way to do it! Change it!
        # data.category_title = data.category_subcategory.category.title
        #data.subcategory_title = data.category_subcategory.subcategory.title

        if not data:
            return None
        return data
        
    def create(self, db: Session, *, obj_in: schemas.ProductCreate) -> Product:
        obj_in_data = obj_in.dict()
        db_obj = self.model(**obj_in_data)  # type: ignore

        category_subcategory = (
            db.query(CategorySubCategory)
            .filter(
                CategorySubCategory.category_id == obj_in.category_id,
                CategorySubCategory.subcategory_id == obj_in.subcategory_id,
            )
            .first()
        )

        if not category_subcategory:
            return None

        # TODO: Not useful way to do it! Change it!
        db_obj.category_subcategory_id = category_subcategory.id
        #db_obj.category_title = category_subcategory.category.title
        #db_obj.subcategory_title = category_subcategory.subcategory.title

        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

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
        return db.query(func.avg(ProductRate.rate).label("average")).filter(
            ProductRate.id == id
        )


product = CRUDProduct(Product)
