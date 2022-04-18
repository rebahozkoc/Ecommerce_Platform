from crud.base import CRUDBase

from models.comment import Comment
from schemas.comment import CommentBase, CommentList


class CRUDComment(CRUDBase[CommentBase, CommentList, CommentBase]):
    pass

comment = CRUDComment(Comment)