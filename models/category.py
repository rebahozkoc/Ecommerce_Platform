from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from db.base_class import Base


class CategorySubcategory(Base):
    __tablename__ = "category_subcategory"

    id = Column(Integer, primary_key=True, index=True)

    category_id = Column(ForeignKey("category.id"))
    subcategory_id = Column(ForeignKey("subcategory.id"))

    category = relationship("Category", back_populates="category")
    subcategory = relationship("Subcategory", back_populates="subcategory")

    products = relationship("Product")


class Category(Base):
    __tablename__ = "category"

    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    subcategories = relationship("CategorySubcategory", back_populates="category")


class SubCategory(Base):
    __tablename__ = "subcategory"

    id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    categories = relationship("CategorySubcategory", back_populates="subcategory")
