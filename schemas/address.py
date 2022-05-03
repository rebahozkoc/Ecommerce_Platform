from typing import Optional, List

from pydantic import BaseModel
from pydantic import Extra


class AddressBase(BaseModel):
    payment_method: str
    card_name: str
    card_number: str
    CW: str
    expiry_date: str
    

    class Config:
        extra = Extra.allow
        orm_mode = True


class AddressCreate(AddressBase):
    pass


class AddressUpdate(AddressBase):
    pass


class AddressInDBBase(AddressBase):
    id: int
    user_id: int