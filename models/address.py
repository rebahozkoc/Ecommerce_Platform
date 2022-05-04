from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from db.base_class import Base


class Address(Base):
    __tablename__ = "address"

    id = Column(Integer, primary_key=True)

    name = Column(String(100), nullable=False)
    full_address = Column(String(100), nullable=False)
    postal_code = Column(String(100), nullable=False)
    city = Column(String(100), nullable=False)
    province = Column(String(100), nullable=False)
    country = Column(String(100), nullable=False)

    user_id = Column(Integer, ForeignKey("user.id"))
    user = relationship("User", back_populates="addresses")
