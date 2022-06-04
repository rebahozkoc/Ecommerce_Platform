from pydantic import BaseModel, validator, Extra
from core.hashing import Hash


class CreditPrivate(BaseModel):
    card_name: str
    payment_method: str
    cardnumber: str


class CreditBase(BaseModel):
    payment_method: str
    card_name: str
    cardnumber: str
    CW: str
    expiry_date: str

    @validator("cardnumber")
    def hash_credit_number(cls, pw: str) -> str:
        decoded = Hash.decode(pw)
        str_index = int(len(decoded) / 4)
        showen_part = decoded[:str_index] + ((len(decoded) - str_index) * "*")
        return showen_part

    class Config:
        extra = Extra.allow
        orm_mode = True


class CreditCreate(CreditBase):
    @validator("cardnumber")
    def hash_credit_number(cls, pw: str) -> str:
        return Hash.encode(pw)


class CreditUpdate(CreditBase):
    pass


class CreditInDBBase(CreditBase):
    id: int
    user_id: int
