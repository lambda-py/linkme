# How to setup a new microservice

## FastAPI service structure

```
/service
│
├── src/
│   ├── main.py             # main application entrypoint
│   ├── api/                # endpoints, routers, request/response models
│   │   ├── endpoints/      # separated by resource or domain
│   │   └── models/         # Pydantic models
│   │
│   ├── config/             # configs
│   ├── db/                 # database related (schemas, CRUD operations, etc.)
│   └── services/           # business logic, integrations, etc.
│
├── tests/                  # test modules
├── pyproject.toml          # service dependencies
└── Dockerfile              # Dockerfile for your application
```