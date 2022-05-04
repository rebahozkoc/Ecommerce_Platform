from sqlalchemy import Column, Integer, ForeignKey, Boolean, String
from sqlalchemy.orm import relationship
from db.base_class import Base


class Product(Base):
    __tablename__ = "product"

    id = Column(Integer, primary_key=True, index=True)

    category_subcategory_id = Column(Integer, ForeignKey("category_subcategory.id"))
    comments = relationship("Comment", back_populates="product", lazy="dynamic")
    photos = relationship("ProductPhoto", back_populates="product")


class ProductPhoto(Base):
    __tablename__ = "productphoto"

    id = Column(Integer, primary_key=True)

    is_active = Column(Boolean, default=True)
    photo_url = Column(String, nullable=False)

    product_id = Column(Integer, ForeignKey("product.id"))
    product = relationship("Product", back_populates="photos")
