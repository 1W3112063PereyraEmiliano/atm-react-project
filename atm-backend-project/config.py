from os import getenv


class BaseConfig():
    SECRET_KEY = getenv("SECRET_KEY")
    DEBUG = True
    ORIGINS_URL = getenv("ORIGINS_URL")


class DevConfiguration(BaseConfig):
    SQLALCHEMY_DATABASE_URI=getenv("SQLALCHEMY_DATABASE_URI")