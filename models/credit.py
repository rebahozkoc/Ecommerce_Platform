from tkinter.tix import MAX
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from db.base_class import Base


class Credit(Base):
    _tablename_ = "credit"

    id = Column(Integer, primary_key=True)
    payment_method = Column(String(100), nullable=False)
    card_name = Column(String(100), nullable=False)
    cardnumber = Column(String, nullable=False)
    CW = Column(String(100), nullable=False)
    expiry_date = Column(String(100), nullable=False)

    user_id = Column(Integer, ForeignKey("user.id"))
    user = relationship("User", back_populates="credits")

    orders = relationship("Order")