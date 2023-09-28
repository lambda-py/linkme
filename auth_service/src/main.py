from config import get_settings
from fastapi import FastAPI

settings = get_settings()


def create_application() -> FastAPI:
    application = FastAPI(
        title=settings.service,
        version=settings.api_version,
    )

    return application


if __name__ == "__main__":
    app = create_application()
    import uvicorn

    uvicorn.run("main:app", host="0.0.0.0", port=8001, reload=True)
