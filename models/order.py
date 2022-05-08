from sqlalchemy import Column, Integer, Enum, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from db.base_class import Base
import enum

class OrderStatus(enum.Enum):
    Processing = 1
    Intransit = 2
    Delivered = 3

class Order(Base):
    __tablename__ = "order"

    id = Column(Integer, primary_key=True, index=True)

    quantity = Column(Integer)
    order_status = Column(Enum(OrderStatus))
    created_at = Column(DateTime)

    # relations
    user_id = Column(ForeignKey("user.id"))
    user = relationship("User", back_populates="orders")

    product_id = Column(ForeignKey("product.id"))
    product = relationship("Product", back_populates="ordered_products")
