# Analytics Service

## System Architecture Diagram

```mermaid
graph TD;
    A[Frontend] -->|API Calls| B[Analytics Service]
    B -->|API Requests| C[Instagram API]
    B -->|API Requests| D[Facebook API]
    B -->|API Requests| E[TikTok API]
    B -->|DB Writes/Reads| F[MongoDB]
```

## Database Schema Diagram

```mermaid
graph TD;
    A[instagram_posts] -->|Foreign Key| B[insights]
    C[facebook_posts] -->|Foreign Key| B[insights]
    D[tiktok_videos] -->|Foreign Key| B[insights]
```

## Data Flow Diagram
    
```mermaid
graph LR;
    A[Social Media APIs] -->|Data Pull| B[Analytics Service]
    B --> C[Data Processing]
    C --> D[Data Storage in MongoDB]
    D --> E[Data Visualization in Dashboard]
```

***insights**: This collection would store the processed or analyzed data—essentially the insights you generate from the raw data.