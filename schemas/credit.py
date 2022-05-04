from pydantic import BaseModel
from pydantic import Extra


class CreditBase(BaseModel):
    
    payment_method = str
    card_name = str
    card_number = str
    CW = str
    expiry_date = str

    class Config:
        extra = Extra.allow
        orm_mode = True


class CreditCreate(CreditBase):
    pass


class CreditUpdate(CreditBase):
    pass


class CreditInDBBase(CreditBase):
    id: int
    user_id: int