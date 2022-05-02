from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
import crud, schemas
from typing import List
from api import deps
from schemas.response import Response

router = APIRouter()


@router.get(
    "/",
    response_model=Response[List[schemas.CategoryShow]],
    response_model_by_alias=False,
)
async def get_categories(
    skip: int = 0, limit: int = 100, db: Session = Depends(deps.get_db)
):
    """
    Returns all categories.
    """
    data = crud.category.get_multi(db=db, skip=skip, limit=limit)
    return Response(data=data)


@router.get(
    "/{id}",
    response_model=Response[schemas.CategoryShow],
    response_model_by_alias=False,
)
async def get_category_by_id(id: int, db: Session = Depends(deps.get_db)):
    """
    Returns the category (with subcategories) by id.
    """
    category = crud.category.get(db=db, field="id", value=id)
    if not category:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={"message": f"Category does not exists."},
        )
    return Response(data=category)


@router.post("/")
async def create_category(
    *,
    category_in: schemas.CategoryCreate,
    db: Session = Depends(deps.get_db),
):
    """
    Creates category from title.
    """
    category = crud.category.create(db, obj_in=category_in)
    if not category:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={"message": f"Exists"},
        )
    return category


@router.patch(
    "/{id}",
    response_model=Response,
)
async def update_category(
    *,
    id: int,
    category_in: schemas.CategoryUpdate,
    db: Session = Depends(deps.get_db),
):
    """
    Updates category title with id
    """
    current_category = crud.category.get(db=db, field="id", value=id)
    if not current_category:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={"message": f"Category does not exists."},
        )

    category = crud.category.update(db, db_obj=current_category, obj_in=category_in)
    return Response(message="Updated successfully")


@router.delete(
    "/{id}",
    response_model=Response,
)
async def remove_category(
    *,
    id: int,
    db: Session = Depends(deps.get_db),
):
    """
    Deletes category title with id
    """
    current_category = crud.category.get(db=db, field="id", value=id)
    if not current_category:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={"message": f"Category does not exists."},
        )
    category = crud.category.remove(db=db, id=id)
    return Response(message="Deleted successfully")
