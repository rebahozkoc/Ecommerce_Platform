from fastapi import APIRouter
from api.api_v1.endpoints import comment, users
from api.api_v1.endpoints.authentication import login, registration


api_router = APIRouter()

api_router.include_router(users.router, prefix="/users")
api_router.include_router(login.router, prefix="/auth", tags=["Authentication"])
api_router.include_router(registration.router, prefix="/auth", tags=["Authentication"])
api_router.include_router(comment.router, prefix="/comment", tags=["Comments"])