FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY pyproject.toml poetry.lock /app/
COPY profile_service/src /app/profile_service

RUN pip install poetry

RUN poetry config virtualenvs.create false

RUN poetry install --no-interaction --no-ansi

CMD ["uvicorn", "profile_service.main:create_application", "--host", "0.0.0.0", "--port", "8002", "--reload"]