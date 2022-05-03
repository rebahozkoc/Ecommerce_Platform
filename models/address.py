from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from db.base_class import Base

class Address(Base):
    __tablename__ = 'address'
    
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('user.id'))
    payment_method= Column(String(100), nullable=False)
    card_name= Column(String(100), nullable=False)
    card_number= Column(String(100), nullable=False)
    CW= Column(String(100), nullable=False)
    expiry_date= Column(String(100), nullable=False)
    user=relationship("User", back_populates="addresses")