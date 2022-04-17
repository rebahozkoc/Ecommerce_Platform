

from distutils.errors import CompileError
from fastapi import APIRouter, Body, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import Any, List
import crud
from api import deps
from core.config import settings
from schemas.comment import CommentBase, CommentList

router = APIRouter()

@router.get("/{product_id}", response_model=List[CommentBase])
def read_comments_of_product(
    db: Session = Depends(deps.get_db),
    product_id: int=-123441,
    skip: int = 0,
    limit: int = 100,
    #current_user: models.User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Retrieve comments of a particular product.
    """
    if product_id==-123441:
        raise HTTPException(status_code=404, detail="Comment id not entered")
    db_comments=crud.comment.get_multi_by_product_id(db=db,id=product_id)
    #categories = db.query(ProductCategory).options(joinedload(ProductCategory.subcategories)).all()
    #print(categories)
    #categories = crud.category.get_multi(db, skip=skip, limit=limit)
    
    return db_comments


@router.post("/", response_model=CommentBase)
def create_comment(
    *,
    db: Session = Depends(deps.get_db),
    comment_in:CommentBase,
    #current_user: models.User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Create new comment.
    """
    
    comment = crud.comment.create(db=db, obj_in=comment_in)
    return comment



@router.delete("/{id}", response_model=CommentBase)
def delete_comment(
    *,
    db: Session = Depends(deps.get_db),
    id: int,
    #current_user: models.User = Depends(deps.get_current_active_user),
) -> Any:
    """
    Delete a comment.
    """
    comment = crud.comment.get(db=db, id=id)
    if not comment:
        raise HTTPException(status_code=404, detail="Comment not found")
    crud.comment.remove(db=db, id=id)
    return comment