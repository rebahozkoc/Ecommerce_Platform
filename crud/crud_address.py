from sqlalchemy.orm import Session
from typing import List
from crud.base import CRUDBase
from models.address import Address
from schemas.address import AddressCreate, AddressUpdate


class CRUDAddress(CRUDBase[Address, AddressCreate, AddressUpdate]):
    def get_multi(
        self, db: Session, *, id: int, skip: int = 0, limit: int = 100
    ) -> List[Address]:
        return db.query(self.model).offset(skip).limit(limit).all()


address = CRUDAddress(Address)
