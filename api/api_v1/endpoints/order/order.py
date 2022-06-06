from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from api import deps

import crud, models, schemas
from schemas import Response
from typing import List

router = APIRouter()


@router.post("/shopping_cart/order", response_model=Response)
async def order_shopping_cart(
    order_details: schemas.OrderShoppingCart,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_user),
):
    """
    Order all items in shopping cart.
    """

    order = crud.order.create_order(
        db=db, current_user=current_user, order_details=order_details
    )

    return Response(message="Successfully ordered the products")


@router.get("/orders", response_model=Response[List[schemas.Order]])
async def previous_orders(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_user),
):
    """
    Get previous orders
    """
    data = crud.order.get_multi(db=db, user_id=current_user.id, skip=skip, limit=limit)

    return Response(data=data)
