from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from crud.base import CRUDBase
from models.address import Address
from schemas.address import AddressCreate, AddressUpdate


class CRUDAddress(CRUDBase[Address, AddressCreate, AddressUpdate]):
    pass

address = CRUDAddress(Address)