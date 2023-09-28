# Variables
DOCKER_COMPOSE = docker-compose
POETRY = poetry

# General tasks
.PHONY: all
all: build

.PHONY: build
build:
	$(DOCKER_COMPOSE) build

.PHONY: up
up:
	$(DOCKER_COMPOSE) up

.PHONY: down
down:
	$(DOCKER_COMPOSE) down

.PHONY: backend-install
backend-install:
	$(POETRY) install

.PHONY: backend-test
backend-test:
	$(POETRY) run pytest

.PHONY: frontend-install
frontend-install:
	cd frontend && npm install

.PHONY: frontend-build
frontend-build:
	cd frontend && npm run build

.PHONY: frontend-test
frontend-test:
	cd frontend && npm run test

.PHONY: clean
clean:
	find . -type f -name "*.pyc" -delete
	find . -type d -name "__pycache__" -delete

.PHONY: isort
isort:
	poetry run isort .

.PHONY: isortcheck
isortcheck:
	@echo "Checking isort..."
	poetry run isort --diff --check-only .

.PHONY: black
black:
	poetry run black .

.PHONY: blackcheck
blackcheck:
	@echo "Checking black..."
	poetry run black --check .

.PHONY: pyformatcheck
pyformatcheck: isortcheck blackcheck

.PHONY: poetrycheck
poetrycheck:
	poetry lock --check

.PHONY: lint
lint: poetrycheck pyformatcheck

.PHONY: autofmt
autofmt: clean black isort

# TODO
#.PHONY: db-migrate
#db-migrate:
#	# DB migration command here
#
#
#.PHONY: docs
#docs:
#	# docs generation command here