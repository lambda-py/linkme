from pydentic import BaseSettings


class Settings(BaseSettings):
    service: str = "auth_service"
    api_version: str = "0.1.0"
