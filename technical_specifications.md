_# Awareness Network: Technical Specifications

**Version 1.0**

---

## 1. Introduction

This document provides a detailed technical overview of the Awareness Network system. It outlines the architectural design, technology stack, data models, and API specifications that will guide the development of the platform. The design prioritizes security, scalability, and user privacy, in line with the principles set forth in the project whitepaper.

## 2. High-Level Architecture

The system is composed of three primary components: a **Cross-Platform Client**, a **Secure Cloud Backend**, and an **AI Processing Pipeline**. The architecture is designed to be a distributed system where the client handles all user interaction and data encryption, the backend provides secure storage and API services, and the AI pipeline performs privacy-preserving analysis.

```mmd
graph TD
    A[Mobile Client] -- Encrypted Data --> B(Secure Cloud Backend)
    B -- Encrypted Data --> C{AI Processing Pipeline}
    C -- Encrypted Insights --> B
    B -- Encrypted Insights & Data --> A

    subgraph "User Device"
        A
    end

    subgraph "Cloud Infrastructure"
        B
        C
    end
```

### 2.1. Component Responsibilities

| Component | Responsibility |
| :--- | :--- |
| **Cross-Platform Client** | - User Interface & Experience<br>- Data Capture (Photos, Messages)<br>- Client-Side Encryption (E2EE)<br>- Local Caching<br>- On-Device AI (e.g., basic OCR) |
| **Secure Cloud Backend** | - User Authentication & Authorization<br>- Zero-Knowledge Encrypted Data Storage<br>- Secure API Endpoints<br>- Metadata Management<br>- Job Queue for AI Pipeline |
| **AI Processing Pipeline** | - Complex, Privacy-Preserving Analysis<br>- Business Card Parsing<br>- Knowledge Graph Generation<br>- Automated Video Creation<br>- Entity & Topic Extraction |

## 3. Technology Stack

To build a robust and scalable platform, the following technologies have been selected for each component of the system.

### 3.1. Cross-Platform Client

- **Framework:** [React Native](https://reactnative.dev/)
  - *Rationale:* Enables a single codebase for both iOS and Android, accelerating development and ensuring a consistent user experience. Its large community and ecosystem of libraries are well-suited for our feature requirements.
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/)
  - *Rationale:* Provides a predictable and centralized state container, which is essential for managing the complex application state, including user authentication, data sync status, and local cache.
- **Cryptography:** [TweetNaCl.js](https://github.com/dchest/tweetnacl-js) (or similar robust library)
  - *Rationale:* A lightweight and audited library for implementing the end-to-end encryption. It provides the necessary public-key cryptography (Box) and secret-key cryptography (Secretbox) primitives.
- **Local Database:** [WatermelonDB](https://github.com/Nozbe/WatermelonDB) or [Realm](https://realm.io/)
  - *Rationale:* A high-performance local database designed for React Native. It will be used to cache metadata and frequently accessed content for offline access and faster UI rendering.

### 3.2. Secure Cloud Backend

- **Language:** [TypeScript](https://www.typescriptlang.org/) with [Node.js](https://nodejs.org/)
  - *Rationale:* Offers strong typing for building reliable and maintainable backend services. The Node.js ecosystem is mature and well-suited for I/O-bound applications like our API server.
- **Framework:** [NestJS](https://nestjs.com/)
  - *Rationale:* A progressive Node.js framework that provides a modular and organized architecture. Its dependency injection system and TypeScript support make it ideal for building scalable and testable applications.
- **Database (Metadata):** [PostgreSQL](https://www.postgresql.org/)
  - *Rationale:* A powerful and reliable open-source relational database. It will be used to store user account information and the encrypted metadata index.
- **Object Storage (Encrypted Data):** [Amazon S3](https://aws.amazon.com/s3/)
  - *Rationale:* A highly scalable and durable object storage service. It will store the user's end-to-end encrypted files.
- **Authentication:** [Auth0](https://auth0.com/) or custom implementation with JWT
  - *Rationale:* Auth0 provides a robust and secure identity management platform out-of-the-box. A custom JWT solution is a viable alternative if more control is needed.

### 3.3. AI Processing Pipeline

- **Language:** [Python](https://www.python.org/)
  - *Rationale:* The de facto standard for machine learning and data science, with an extensive ecosystem of libraries and frameworks.
- **ML Frameworks:**
  - [spaCy](https://spacy.io/): For Natural Language Processing (NLP) tasks like entity recognition from messages and documents.
  - [OpenCV](https://opencv.org/): For computer vision tasks, including image analysis and pre-processing for OCR.
  - [Tesseract.js](https://tesseract.projectnaptha.com/) / Cloud OCR API: For Optical Character Recognition (OCR) to extract text from images and business cards (e.g., using [Mindee API](https://www.mindee.com/)).
- **Video Generation:** [Shotstack API](https://shotstack.io/) or [Creatomate API](https://creatomate.com/developers)
  - *Rationale:* These APIs provide a scalable and template-driven approach to generating videos from images and clips, offloading the complex video rendering process to a specialized service.
- **Job Queue:** [RabbitMQ](https://www.rabbitmq.com/) or [Redis](https://redis.io/)
  - *Rationale:* To manage and distribute asynchronous AI processing tasks. The backend will add jobs to the queue, and the AI pipeline workers will consume them.

## 4. Data Models

This section defines the core data structures for the Awareness Network. These models will be used in the client-side database and as the basis for the backend API.

### 4.1. User

Represents a registered user of the platform.

```json
{
  "userId": "uuid",
  "email": "string",
  "hashedPassword": "string",
  "publicKey": "string", // User's public encryption key
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### 4.2. Memory

A generic container for any piece of data the user wants to store. This could be a photo, a message, a document, or a note.

```json
{
  "memoryId": "uuid",
  "userId": "uuid",
  "type": "enum('photo', 'message', 'contact', 'note')",
  "encryptedContent": "blob", // The E2EE encrypted content
  "encryptedMetadata": "blob", // Encrypted details like filename, location, etc.
  "sourceApp": "string", // e.g., 'com.apple.photos', 'org.telegram.messenger'
  "capturedAt": "timestamp", // The original timestamp of the memory
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### 4.3. Contact

Represents a person in the user's network, often created from a business card or extracted from messages.

```json
{
  "contactId": "uuid",
  "userId": "uuid",
  "encryptedData": "blob", // Encrypted contact details (name, company, email, phone)
  "sourceMemoryId": "uuid", // The memory this contact was extracted from (e.g., a photo of a business card)
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### 4.4. KnowledgeLink

Represents a relationship or link between two or more memories, forming the basis of the knowledge graph.

```json
{
  "linkId": "uuid",
  "userId": "uuid",
  "encryptedRelationship": "blob", // Encrypted description of the link (e.g., 'met at conference X')
  "nodes": [
    { "type": "memory", "id": "uuid" },
    { "type": "contact", "id": "uuid" }
  ],
  "createdAt": "timestamp"
}
```

## 5. API Specifications

The backend will expose a RESTful API for the client. All endpoints will require JWT-based authentication.

### 5.1. Authentication

- `POST /auth/register`: Register a new user.
- `POST /auth/login`: Authenticate a user and receive a JWT.
- `POST /auth/refresh`: Refresh an expired JWT.

### 5.2. Memories

- `POST /memories`: Upload a new encrypted memory.
  - **Body:** `{ "type": "...", "encryptedContent": "...", "encryptedMetadata": "...", "capturedAt": "..." }`
- `GET /memories`: List memories with encrypted metadata (for search/timeline).
- `GET /memories/{id}`: Download a specific encrypted memory.
- `DELETE /memories/{id}`: Delete a memory.

### 5.3. AI Processing Jobs

- `POST /jobs/ocr`: Submit a memory (e.g., a business card image) for OCR processing.
  - **Body:** `{ "memoryId": "..." }`
  - **Response:** `{ "jobId": "..." }`
- `POST /jobs/video-montage`: Submit a set of memories to be compiled into a video.
  - **Body:** `{ "memoryIds": ["...", "..."], "style": "..." }`
  - **Response:** `{ "jobId": "..." }`
- `GET /jobs/{id}`: Check the status of a job.
  - **Response:** `{ "status": "pending|completed|failed", "result": { ... } }` (result is encrypted)
