from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import Any, List

import crud, models, schemas
from schemas import ProductBase, CommentBase
from api import deps

router = APIRouter()

@router.get("/{product_id}/comments",
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
    product = crud.product.get(db=db, field="id", value=product_id)
    return product


@router.post("/{product_id}/comments", 
    response_model=CommentBase
)
def create_comment(
    *,
    comment_in:CommentBase,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_user),
) -> Any:
    """
    Create new comment.
    """
    
    comment = crud.comment.create(db=db, obj_in=comment_in)
    return comment



@router.delete("/comments/{comment_id}", response_model=CommentBase)
def delete_comment(
    *,
    id: int,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_user),
) -> Any:
    """
    Delete a comment.
    """
    comment = crud.comment.get(db=db, id=id)
    if not comment:
        raise HTTPException(status_code=404, detail="Comment not found")
    crud.comment.remove(db=db, id=id)
    return comment