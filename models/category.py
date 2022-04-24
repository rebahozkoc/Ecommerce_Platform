from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from db.base_class import Base
from sqlalchemy.ext.associationproxy import association_proxy


class CategorySubCategory(Base):
    __tablename__ = "category_subcategory"

    id = Column(Integer, primary_key=True, index=True)

    category_id = Column(ForeignKey("category.id"))
    subcategory_id = Column(ForeignKey("subcategory.id"))

    category = relationship("Category", back_populates="subcategories")
    subcategory = relationship("SubCategory", back_populates="categories")

    # proxies
    category_title = association_proxy(target_collection="category", attr="title")
    subcategory_title = association_proxy(target_collection="subcategory", attr="title")

    products = relationship("Product")


class Category(Base):
    __tablename__ = "category"

    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    subcategories = relationship(
        "CategorySubCategory", cascade="all,delete", back_populates="category"
    )


class SubCategory(Base):
    __tablename__ = "subcategory"

    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    categories = relationship(
        "CategorySubCategory", cascade="all,delete", back_populates="subcategory"
    )
