from typing import Optional, List

from pydantic import BaseModel

class CommentBase(BaseModel):
    id: Optional[int]
    product_id: int
    text: str
    class Config:
        orm_mode = True

class CommentList(BaseModel):
    comments: List[CommentBase]
    class Config:
        orm_mode = True


