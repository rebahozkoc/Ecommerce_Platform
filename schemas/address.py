from typing import Optional, List

from pydantic import BaseModel
from pydantic import Extra


class AddressBase(BaseModel):
    id:int
    user_id: Optional[int]
    payment_method: str
    card_name: str
    card_number: str
    CW: str
    expiry_date: str
    

    class Config:
        orm_mode = True


class AddressCreate(BaseModel):
    pass


class AddressUpdate(AddressCreate):
    pass


class AddressInDBBase(AddressBase):
    id: Optional[int] = None

    class Config:
        orm_mode = True


class AddressList(BaseModel):
    addresses: List[AddressBase]

    class Config:
        orm_mode = True
