# Simple Content Management Back-End Application

## Overview

This project is a back-end application developed using Node.js and Express.js that includes user registration and authentication, basic content management, search functionality, and performance optimization. The application uses JWT for securing API endpoints and indexing to enhance performance. It also follows security best practices and includes comprehensive documentation.

## Features

- **User Registration and Authentication**: Register users and authenticate them using JWT.
- **Basic Content Management**: CRUD operations on educational content (e.g., Courses and Lessons).
- **Search Functionality**: Search content based on keywords with indexing.
- **Security**: Input validation, proper error handling, and protection against common vulnerabilities.

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/NandishYadav/LMS.git
   cd LMS
   npm install
   cp .env.example .env
   npm run start
   ```

## API Endpoints
    Below are the available API endpoints grouped by functionalities:

### Users

- **GET `/users`**
  - Description: Retrieve all users.

- **GET `/users/:id`**
  - Description: Retrieve details of a specific user by ID.

- **POST `/users`**
  - Description: Register a new user.

- **PUT `/users/:id`**
  - Description: Update user details.

- **DELETE `/users/:id`**
  - Description: Delete a user.

- **POST `/users/login`**
  - Description: Login and get Authentication Token.
  


### Courses

- **GET `/courses`**
  - Description: Retrieve all courses.

- **GET `/courses/:id`**
  - Description: Retrieve details of a specific course by ID.

- **POST `/courses`**
  - Description: Add a new courses.

- **PUT `/courses/:id`**
  - Description: Update course details.

- **DELETE `/courses/:id`**
  - Description: Delete a courses.

### Lessons

- **GET `/lessons`**
  - Description: Retrieve all lessons .

- **GET `/lessons/:id`**
  - Description: Retrieve details of a specific lesson by ID.

- **POST `/lessons`**
  - Description: Add a new lessons.

- **PUT `/lessons/:id`**
  - Description: Update lessons details by Id.

- **DELETE `/lessons/:id`**
  - Description: Delete a lesson by Id.
