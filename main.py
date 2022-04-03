from core.config import settings
from fastapi import FastAPI
from api.api_v1.api import api_router as api_router_v1


app = FastAPI(
    title=settings.APP_NAME, description=settings.APP_DESCRIPTION, docs_url= settings.API_V1_STR + "/docs"
)

app.include_router(api_router_v1, prefix=settings.API_V1_STR)

@app.get("/")
def index():
    return {"msg": "Hello World Test"}