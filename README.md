Hey, hi himanshu is here
please read and follow steps given by me to create bug free app

# Simple To-Do List Application 

## Overview
This is a simple RESTful API for a To-Do list application built with Node.js, Express, and MongoDB.

## Prerequisites
- Node.js
- MongoDB

## Installation

1. Clone the repository

2. Navigate to the project directory

3. Install dependencies

4. Set up environment variables
- Create a `.env` file in the root directory.
- Add the following:
  ```
  MONGODB_URI=mongodb://localhost:27017/todo-list
  PORT=3000
  ```

5. Start the server

## API Endpoints

### Task Endpoints
- `GET /api/tasks`: Retrieve a list of all tasks.
- `GET /api/tasks/:id`: Retrieve a single task by its ID.
- `POST /api/tasks`: Create a new task.
- `PUT /api/tasks/:id`: Update an existing task.
- `DELETE /api/tasks/:id`: Delete a task.

## Error Handling
Proper error handling is implemented in the middleware `errorHandler.js`.

## License
This project is licensed under the MIT License.

