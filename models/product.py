from sqlalchemy import Column, Integer, ForeignKey, Boolean, String, Float
from sqlalchemy.orm import relationship
from db.base_class import Base
from sqlalchemy.ext.associationproxy import association_proxy


class Product(Base):
    __tablename__ = "product"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(125), nullable=False)
    description = Column(String, nullable=False)
    stock = Column(Integer)
    price = Column(Float)
    model = Column(String)
    number = Column(String)
    distributor = Column(String)

    category_subcategory_id = Column(Integer, ForeignKey("category_subcategory.id"))
    category_subcategory = relationship("CategorySubCategory", cascade="all,delete", back_populates="products")

    # proxies
    category_title = association_proxy(target_collection="category_subcategory", attr="category_title")
    subcategory_title = association_proxy(target_collection="category_subcategory", attr="subcategory_title")

    comments = relationship("Comment", back_populates="product", lazy="dynamic")
    photos = relationship("ProductPhoto", back_populates="product")
    rates = relationship("ProductRate", back_populates="product")


class ProductPhoto(Base):
    __tablename__ = "productphoto"

    id = Column(Integer, primary_key=True)

    is_active = Column(Boolean, default=True)
    photo_url = Column(String, nullable=False)

    product_id = Column(Integer, ForeignKey("product.id"))
    product = relationship("Product", back_populates="photos")


class ProductRate(Base):
    __tablename__ = "productrate"

    id = Column(Integer, primary_key=True)

    rate = Column(Integer)

    user_id = Column(Integer, ForeignKey("user.id"))
    user = relationship("User")

    product_id = Column(Integer, ForeignKey("product.id"))
    product = relationship("Product", back_populates="rates")
