FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY pyproject.toml poetry.lock /app/
COPY auth_service/src /app/auth_service

RUN pip install poetry

RUN poetry config virtualenvs.create false

RUN poetry install --no-interaction --no-ansi

CMD ["uvicorn", "auth_service.main:create_application", "--host", "0.0.0.0", "--port", "8001", "--reload"]
