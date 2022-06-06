from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from api import deps
from models.user import UserType
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

@router.post("/orders/refund", response_model=Response)
async def refund_order_request(
    refund: schemas.RefundCreate,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_user),
):
    """
    Send refund request
    """
    # TODO: only current user can refund own orders
    orderitem = crud.order.create_refund_request(db, refund)
    return Response(message="Successfully sent the refund request")

@router.get("/orders/refunds", response_model=Response[List[schemas.RefundRequestBase]])
async def refund_requests(
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_user),
):
    """
    Get all refund requests
    """
    if current_user.user_type != UserType.SALES_MANAGER:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail={"message":"Only sales managers can see refund requests"},
        )
    refund_requests = crud.order.get_refund_requests(db)
    return Response(data=refund_requests)

@router.post("/orders/refund/status/{id}", response_model=Response)
async def change_order_request(
    orderItemId: int,
    refund_request: schemas.RefundUpdate,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_user),
):
    """
    Change status of refund request (with orderItemId)
    """
    if current_user.user_type != UserType.SALES_MANAGER:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail={"message":"Only sales managers can update refund request"},
        )
    crud.order.change_refund_status(db, orderItemId, refund_request.status)
    return Response(message="Successfully sent the refund request")