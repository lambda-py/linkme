FROM python:3.11-slim

WORKDIR /app

COPY pyproject.toml poetry.lock /app/
COPY auth_service/ /app/auth_service

RUN pip install poetry

RUN poetry config virtualenvs.create false

RUN poetry install --no-interaction --no-ansi

CMD ["uvicorn", "auth_service.src.main:app", "--host", "0.0.0.0", "--port", "8001", "--reload"]
