from core.config import settings
from fastapi import FastAPI, Body
from api.api_v1.api import api_router as api_router_v1
from core.celery_worker import create_task
from fastapi.responses import JSONResponse


app = FastAPI(
    title=settings.APP_NAME, description=settings.APP_DESCRIPTION, docs_url= settings.API_V1_STR + "/docs"
)

app.include_router(api_router_v1, prefix=settings.API_V1_STR)

@app.get("/")
def index():
    return {"msg": "Hello World Test"}

@app.post("/test_celery")
def test_celery(data=Body(...)):
    amount = int(data['amount'])
    x = data["x"]
    y = data["y"]
    task = create_task.delay(amount, x, y)
    return JSONResponse({"result": task.get()})