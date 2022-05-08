from sqlalchemy import Boolean, Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from db.base_class import Base


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    is_active = Column(Boolean(), default=True)

    comments = relationship("Comment", back_populates="user")
    addresses = relationship("Address", back_populates="user")
    credits = relationship("Credit", back_populates="user")

    shopping_cart_products = relationship("ShoppingCart")

    orders = relationship("Order")
