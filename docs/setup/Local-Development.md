# Local Development Setup

## Step-by-Step Setup:

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
docker-compose build
```

4. **Running Services**:

```
docker-compose up -d
```

* For a specific service:

```
docker-compose up auth_service
```

5. **Accessing the Services**:

* Auth Service: http://localhost:8001
* Profile Service: http://localhost:8002
* Frontend: http://localhost:3000

6. **Stopping Services**:

```
docker-compose down
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