from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from crud.base import CRUDBase
from models.comment import Comment
from schemas.comment import CommentCreate, CommentUpdate


class CRUDComment(CRUDBase[Comment, CommentCreate, CommentUpdate]):
    def remove(self, db: Session, *, id: int, current_user: int) -> Comment:
        obj = self.get(db=db, field="id", value=id)

        if obj.user_id != current_user:
            raise HTTPException(status_code=status.HTTP_405_METHOD_NOT_ALLOWED,
                    detail={"message": f"You can't delete this comment!"})

        db.delete(obj)
        db.commit()
        return obj

comment = CRUDComment(Comment)