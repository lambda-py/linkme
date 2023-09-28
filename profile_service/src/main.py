from fastapi import FastAPI

from profile_service.config import get_settings

settings = get_settings()


def create_application() -> FastAPI:
    application = FastAPI(
        title=settings.service_name,
        version=settings.api_version,
    )

    return application
