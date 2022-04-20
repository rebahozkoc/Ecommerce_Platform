from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from api import deps

import crud, models, schemas
from schemas import Response
from typing import Any, List

router = APIRouter()


@router.get(
    "/{product_id}/comments", response_model=Response[List[schemas.CommentBase]]
)
def get_comments_of_product(
    product_id: int,
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(deps.get_db),
) -> Any:
    """
    Retrieve comments of a particular product.
    """
    product = crud.product.get_comments(db=db, id=product_id, skip=skip, limit=limit)
    return Response(data=product, isSuccess=True)


@router.post("/{product_id}/comments", response_model=Response[schemas.CommentBase])
def create_comment(
    *,
    comment_in: schemas.CommentCreate,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_user),
) -> Any:
    """
    Create new comment.
    """
    comment_in.user_id = current_user.id
    product = crud.product.get(db=db, field="id", value=comment_in.product_id)
    comment = crud.comment.create(db=db, obj_in=comment_in)
    return Response(data=comment, isSuccess=True)


@router.delete("/comments/{comment_id}", response_model=Response[schemas.CommentBase])
def delete_comment(
    *,
    comment_id: int,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_user),
) -> Any:
    """
    Delete a comment.
    """
    comment = crud.comment.remove(db=db, id=comment_id, current_user=current_user.id)
    return Response(data=comment, isSuccess=True)
