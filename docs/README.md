# Project Overview

Objective: 
Social Media Dashboard that allows users to link multiple social media accounts and view aggregated insights like posts, mentions, and follower counts.


- [Overall Architecture](./architecture/Overall-Architecture.md)
- [Auth Service](./architecture/Auth-Service.md)
- [Profile Service](./architecture/Profile-Service.md)
- Analytics Service TODO
- [Dashboard](./architecture/Dashboard.md) TODO
- [Infrastructure](./architecture/Infrastructure.md)
- [CI/CD](./architecture/CI-CD.md)
- [Monitoring and Analytics](./architecture/Monitoring-and-Analytics.md)
- [Testing](./architecture/Testing.md)



### Components:

1. Backend Microservices  
	[How to setup a new microservice](./architecture/How-to-setup-a-new-microservice.md)
	- Auth Service: Handles user registration, authentication.
    - Profile Service: Handles user profile information and social media account information.
	- TODO Analytics Service: Pulls data from social media APIs (Twitter, Instagram, Facebook, etc.) and generates insights and statistics.
2. Frontend
	- ReactJS Dashboard: A user interface built in ReactJS for interacting with the backend services. Provides the UI for linking social media accounts and displaying insights.

### Backend:

- Language: Python
- Framework: FastAPI
- Package Management: Poetry
- Logging: Loguru
- Performance Monitoring: New Relic
- Code Style Checker: Flake8

### Frontend:

- Language: JavaScript
- Library: ReactJS
- Package Management: npm or yarn
- Testing: Jest
- Code Style Checker: ESLint

### DevOps:

- Infrastructure: AWS
- Infrastructure as Code: Terraform
- CI/CD: GitHub Actions
- Centralized Logging: Optionally, AWS CloudWatch or another solution integrated with Loguru.

### Monitoring and Analytics:

- Application Performance Monitoring (APM): New Relic
- Error Tracking: Bugsnag

### Diagrams and Documentation:

- Diagrams as Code: Mermaid

### Code Review:

- GitHub

### Optional:

- End-to-end Testing: Cypress
