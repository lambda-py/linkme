FROM python:3.11-slim

WORKDIR /app

COPY pyproject.toml poetry.lock /app/
COPY profile_service/ /app/profile_service

RUN pip install poetry

RUN poetry config virtualenvs.create false

RUN poetry install --no-interaction --no-ansi

CMD ["uvicorn", "profile_service.main:app", "--host", "0.0.0.0", "--port", "8001", "--reload"]