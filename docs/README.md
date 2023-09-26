# Project Overview

Objective: 
Social Media Dashboard that allows users to link multiple social media accounts and view aggregated insights like posts, mentions, and follower counts.


- [Overall Architecture](./architecture/Overall-Architecture.md)
- [Auth Service](./architecture/Auth-Service.md)
- [Analytics Service](./architecture/Analytics-Service.md)
- [Dashboard](./architecture/Dashboard.md)
- [Infrastructure](./architecture/Infrastructure.md)
- [CI/CD](./architecture/CI-CD.md)
- [Monitoring and Analytics](./architecture/Monitoring-and-Analytics.md)
- [Testing](./architecture/Testing.md)
- [Documentation](./architecture/Documentation.md)



### Components:

1. Backend Microservices
	- User Service: Handles user registration, authentication, and social media account linking.
	- Analytics Service: Pulls data from social media APIs (Twitter, Instagram, Facebook, etc.) and generates insights and statistics.
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

### Optional:

- End-to-end Testing: Cypress
- Code Review: GitHub