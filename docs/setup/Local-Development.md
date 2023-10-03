# Local Development Setup

## Backend FastAPI

### Step-by-Step Setup:

1. **Clone the Repository**:
```bash
git clone https://github.com/acman/linkme.git
cd linkme
```

2. **Environment Configuration**:

* Copy .env.example to .env:
```bash
cp .env.example .env
```
* Modify .env for local variables.

3. **Docker Compose Build**:

```
docker compose build
```

4. **Running Services**:

```
docker compose up -d
```

* For a specific service:

```
docker compose up auth_service
```

5. **Accessing the Services**:

* Auth Service: http://localhost:8001

6. **Stopping Services**:

```
docker compose down
```

7. **Running Tests**:

```
docker-compose run auth_service pytest
```

### Tips:
* Update Docker images using `docker-compose build`.
* View logs using `docker-compose logs [service_name]`.
* Set up volumes in `docker-compose.yml` for data persistence.
* Ensure `.env` is updated for local configurations.

## Backend Lambda

1. Install [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
2. Go to service with lambdas

```
cd profile_service
```

3. Build

```
sam build
```

4. Run locally

```
sam local start-api
```

Test single lambda

```
sam local invoke <lambda_name>
```

## Before committing

1. Install poetry [off docs](https://python-poetry.org/docs/#installation)

1. Install dependencies:

```
make install
```

2. Create precommit hook:

```
make precommit
```

3. Format code before every commit:

```
make autofmt
```

## Frontend

### Step-by-Step Setup:

1. **Clone the Repository**:
```bash
git clone https://github.com/acman/linkme.git
cd linkme
```

2. **Build the Frontend**:

```bash
docker compose build frontend
```

3. **Running the Frontend**:

```bash
docker compose up frontend
```
