from logging.config import fileConfig

from sqlalchemy import engine_from_config
from sqlalchemy import pool

from alembic import context
import alembic

import os, sys
from dotenv import load_dotenv

from core.config import settings  # noqa
from sqlalchemy import engine_from_config, create_engine, pool
from psycopg2 import DatabaseError


BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
load_dotenv(os.path.join(BASE_DIR, ".env"))
sys.path.append(BASE_DIR)

# this is the Alembic Config object, which provides
# access to the values within the .ini file in use.
config = context.config

config.set_main_option("sqlalchemy.url", os.environ.get("DATABASE_URL"))

# Interpret the config file for Python logging.
# This line sets up loggers basically.
if config.config_file_name is not None:
    fileConfig(config.config_file_name)

# add your model's MetaData object here
# for 'autogenerate' support
# from myapp import mymodel
# target_metadata = mymodel.Base.metadata
from db.base import Base
target_metadata = Base.metadata

# other values from the config, defined by the needs of env.py,
# can be acquired:
# my_important_option = config.get_main_option("my_important_option")
# ... etc.

# import models
# target_metadata = models.Base.metadata

def run_migrations_online():
    """Run migrations in 'offline' mode.

    This configures the context with just a URL
    and not an Engine, though an Engine is acceptable
    here as well.  By skipping the Engine creation
    we don't even need a DBAPI to be available.

    Calls to context.execute() here emit the given string to the
    script output.

    """
    DB_URL = f"{settings.DATABASE_URL}_test" if os.environ.get("TESTING") else str(settings.DATABASE_URL)

    if os.environ.get("TESTING"):
        # connect to primary db
        default_engine = create_engine(str(settings.DATABASE_URL), isolation_level="AUTOCOMMIT")
        # drop testing db if it exists and create a fresh one
        with default_engine.connect() as default_conn:
            default_conn.execute(f"DROP DATABASE IF EXISTS {settings.DB_NAME}_test")
            default_conn.execute(f"CREATE DATABASE {settings.DB_NAME}_test")

    connectable = config.attributes.get("connection", None)
    config.set_main_option("sqlalchemy.url", DB_URL)

    if connectable is None:
        connectable = engine_from_config(
            config.get_section(config.config_ini_section), prefix="sqlalchemy.", poolclass=pool.NullPool,
        )

    with connectable.connect() as connection:
        alembic.context.configure(connection=connection, target_metadata=None)

        with alembic.context.begin_transaction():
            alembic.context.run_migrations()


def run_migrations_offline():
    """Run migrations in 'online' mode.

    In this scenario we need to create an Engine
    and associate a connection with the context.

    """
    if os.environ.get("TESTING"):
        raise DatabaseError("Running testing migrations offline currently not permitted.")

    alembic.context.configure(url=str(settings.DATABASE_URL))

    with alembic.context.begin_transaction():
        alembic.context.run_migrations()


if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
