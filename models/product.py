from sqlalchemy import Column, Integer
from sqlalchemy.orm import declarative_base, relationship
from db.base_class import Base

class Product(Base):
    __tablename__ = 'product'

    id = Column(Integer,primary_key=True, index=True)
    children = relationship("Comment", back_populates="product")
    
