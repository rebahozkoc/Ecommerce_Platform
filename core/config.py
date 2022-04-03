from pydantic import BaseSettings
import os
from dotenv import load_dotenv

load_dotenv()

DEBUG = os.getenv("DEBUG", 'False').lower() in ('true', '1', 't')

if DEBUG:
    BASE_URL = os.getenv('DEVELOPMENT_URL')
else:
    BASE_URL = os.getenv('PRODUCTION_URL')

class Settings(BaseSettings):
    DEBUG: bool = DEBUG

    APP_NAME: str = "urdan"
    APP_DESCRIPTION: str = "Furniture eCommerce"
    SECRET_KEY: str = os.getenv('SECRET_KEY')
    
    CURRENT_API_VERSION: str = os.getenv('CURRENT_API_VERSION')
    CURRENT_VERSION_LOGIN_URL: str = os.getenv('CURRENT_VERSION_LOGIN_URL')

    BASE_URL: str = BASE_URL
    API_URL: str = BASE_URL + str(CURRENT_API_VERSION)
    API_V1_STR: str = "/api/v1"

    HASHING_ALGORITHM: str = os.getenv('HASHING_ALGORITHM')
    ACCESS_TOKEN_EXPIRE_MINUTES: int = os.getenv('ACCESS_TOKEN_EXPIRE_MINUTES')

    DATABASE_URL: str = os.getenv('DATABASE_URL')
    DB_NAME: str = os.getenv('DB_NAME')

    
settings=Settings()