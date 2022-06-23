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

@router.patch("/orders/change_status", response_model=Response)
async def update_order_status_(
    order_id: int,
    order_status: str,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_user),
):
    """
    change the status of an order to either
    PROCESSING = "PROCESSING" or
    INTRANSIT = "INTRANSIT" or
    DELIVERED = "DELIVERED"
    """
    if current_user.user_type != UserType.PRODUCT_MANAGER:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail={"message":"Only product managers can update order stats"},
        )
    if order_status != "PROCESSING" and order_status != "INTRANSIT" and order_status != "DELIVERED":
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail={"message":"PROCESSING INTRANSIT DELIVERED are the only accepted statuses"},
        )
    #update the order by using the update_order_status function
    crud.order.update_order_status(id=order_id, order_status=order_status, db=db)
    #return a success response
    return Response(message="Successfully updated the order request")