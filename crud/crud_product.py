from crud.base import CRUDBase

from models.product import Product
from schemas.product import ProductBase, ProductCreate, ProductUpdate


class CRUDProduct(CRUDBase[ProductBase, ProductCreate, ProductUpdate]):
    pass


product = CRUDProduct(Product)