from sqlalchemy import Column, Integer
from sqlalchemy.orm import relationship
from db.base_class import Base

class Product(Base):
    __tablename__ = 'product'

    id = Column(Integer,primary_key=True, index=True)
    comments = relationship("Comment", back_populates="product")
    
