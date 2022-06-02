from fastapi import APIRouter, Depends, HTTPException, status, UploadFile, File
from sqlalchemy.orm import Session
from api import deps

import crud, models, schemas
from models.user import UserType
from schemas import Response
from typing import Any, List

router = APIRouter()

@router.get("/{id}/price", response_model=Response)
async def get_product_price(
    id: int,
    db: Session = Depends(deps.get_db),
) -> Any:
    """
    Retrieve product price from id
    """
    product = crud.product.get(db=db, field="id", value=id)
    if not product:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={"message": f"Product does not exists"},
        )

    price = product.price
    if product.discount is not None:
        price -= price * product.discount / 100

    return Response(data={"price" : price})

@router.post("/{id}/updatePrice", response_model=Response[schemas.Product])
async def update_price(
    id: int,
    price: int,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_user),
) -> Any:
    """
    Update product price
    """
    if current_user.user_type != UserType.SALES_MANAGER:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail={"message":"Only sales managers can update products price"},
        )

    product = crud.product.update_price(db=db, product_id=id, price=price)
    if not product:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={"message": f"Product does not exists"},
        )
    return Response(data=product)


@router.post("/{id}/discount", response_model=Response[schemas.Product])
async def update_discount(
    id: int,
    discount: int,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_user),
) -> Any:
    """
    Update product discount
    """
    if current_user.user_type != UserType.SALES_MANAGER:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail={"message":"Only sales managers can update products discount"},
        )

    product = crud.product.update_discount(db=db, product_id=id, discount=discount)
    if not product:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={"message": f"Product does not exists"},
        )
    return Response(data=product)