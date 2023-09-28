from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    service_name: str = "auth_service"
    api_version: str = "0.1.0"
