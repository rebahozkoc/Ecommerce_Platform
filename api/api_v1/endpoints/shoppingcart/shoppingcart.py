from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from api import deps

import crud, models, schemas
from schemas import Response
from typing import List

router = APIRouter()


@router.get("/shopping_cart", response_model=Response[List[schemas.ShoppingCart]])
async def get_shopping_cart(
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_user),
):
    """
    Returns shopping cart.
    """
    data = crud.shopping_cart.get(db=db, user=current_user)
    return Response(data=data)


@router.post("/shopping_cart/", response_model=Response)
async def add_product_to_shopping_cart(
    product_cart: schemas.ShoppingCartAddProduct,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_user),
):
    """
    Add product to shopping cart.
    """
    product = crud.product.get(db=db, field="id", value=product_cart.product_id)
    if not product:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={"message": f"Product does not exists"},
        )

    if product_cart.quantity <= 0:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={"message": f"Please add at least one quantity"},
        )

    db_shopping_cart_product = crud.shopping_cart.get_product(
        db=db, user=current_user, product_id=product.id
    )

    if db_shopping_cart_product:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={"message": f"Product exists in shopping cart"},
        )

    if product.stock < product_cart.quantity:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={"message": f"There is not enough quantity for this product"},
        )

    data = crud.shopping_cart.add_product(
        db=db, user=current_user, product=product_cart
    )
    return Response(message="Successfully added the product to the cart")


@router.patch("/shopping_cart/", response_model=Response)
async def update_product_from_shopping_cart(
    product_cart: schemas.ShoppingCartUpdateProduct,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_user),
):
    """
    Updates product in shopping cart.
    """
    db_shopping_cart_product = crud.shopping_cart.get_product(
        db=db, user=current_user, product_id=product_cart.product_id
    )
    if not db_shopping_cart_product:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={"message": f"Product does not exists in shopping cart"},
        )

    if product_cart.quantity <= 0:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={"message": f"Please add at least one quantity"},
        )

    if db_shopping_cart_product.product.stock < product_cart.quantity:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={"message": f"There is not enough quantity for this product"},
        )

    data = crud.shopping_cart.update(
        db=db, db_obj=db_shopping_cart_product, obj_in=product_cart
    )
    return Response(message="Successfully updated the product from the cart")

@router.delete(
    "/shopping_cart/{product_id}",
    response_model=Response,
    response_model_by_alias=False,
)
async def remove_product_off_of_cart(
    *,
    product_id: int,
    db: Session = Depends(deps.get_db),
    current_user: models.User = Depends(deps.get_current_user),
):
    """
    Removes product inside the cart of the user
    """
    cart = crud.shopping_cart.get(db=db, user=current_user)
    if not cart:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={"message": f"Cart does not exist"},
        )

    product = crud.shopping_cart.get_product(db=db, user=current_user, product_id=product_id)
    if not product:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={"message": f"Product does not exist"},
        )

    product = crud.shopping_cart.remove(db=db, user= current_user, id=product.id)
    return Response(message="Removed successfully")