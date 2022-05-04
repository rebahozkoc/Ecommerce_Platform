from fastapi import APIRouter, Depends, HTTPException, status, UploadFile, File
from sqlalchemy.orm import Session
from api import deps

import crud, models, schemas
from schemas import Response
from typing import Any
from utilities.image import ImageUtilities

router = APIRouter()


@router.get("/{id}", response_model=Response[schemas.ProductBase])
async def get_product(
    id: int,
    db: Session = Depends(deps.get_db),
) -> Any:
    """
    Retrieve product from id
    """
    product = crud.product.get(db=db, field="id", value=id)
    if not product:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={"message": f"Product does not exists"},
        )

    #base_product = schemas.ProductShow(**product.__dict__)
    #base_product.average_rate = crud.product.get_avg_rate(db=db, id=product.id)

    return Response(data=product)


@router.post("/{id}/photo/add", response_model=Response)
async def add_photo_to_product(
    *,
    id: int,
    photo: UploadFile = File(...),
    db: Session = Depends(deps.get_db),
):
    """
    Uploads photo of product.
    """
    product = crud.product.get(db=db, field="id", value=id)
    if not product:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={"message": f"Product does not exists"},
        )

    added_photo = crud.product.add_photo(db=db, product=product, photo=photo)
    photo_url = ImageUtilities.get_image_url(added_photo.photo_url)
    return Response(data=photo_url, message="Uploaded photo successfully")


@router.delete("/{id}/photo/{photo_id}/remove", response_model=Response)
async def remove_photo_to_product(
    *,
    id: int,
    photo_id: int,
    db: Session = Depends(deps.get_db),
):
    """
    Removes photo of product.
    """
    product = crud.product.get(db=db, field="id", value=id)
    if not product:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={"message": f"Product does not exists"},
        )

    added_photo = crud.product.remove_photo(db=db, photo_id=photo_id)
    if not added_photo:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={"message": f"Photo of the product does not exists"},
        )
    photo_url = ImageUtilities.get_image_url(added_photo.photo_url)
    return Response(data=photo_url, message="Deleted photo successfully")
