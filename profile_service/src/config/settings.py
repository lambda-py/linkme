from pydentic import BaseSettings


class Settings(BaseSettings):
    service: str = "profile_service"
    version: str = "0.1.0"
