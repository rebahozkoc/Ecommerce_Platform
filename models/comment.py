from sqlalchemy import Boolean, Column, Integer, String, Sequence,ForeignKey, Table
from sqlalchemy.orm import declarative_base, relationship
from db.base_class import Base

class Comment(Base):
    id= Column(Integer,primary_key=True, index=True)
    product_id=Column(Integer,nullable=False)
    text= Column(String(1000), nullable=False)
    

