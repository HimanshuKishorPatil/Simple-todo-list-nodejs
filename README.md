Hey, hi himanshu is here

Welcome to your To-DO List app 👋


## Overview
This is a simple RESTful API for a To-Do list application built with Node.js, Express, and MongoDB.

-------------------------------------getting started-------------------------------------------------------------------
## Prerequisites
documentation links are provided to dawnload and install the requirements
1) Node.js 
   NodeJS is an open-source and cross-platform runtime environment built on Chrome’s V8 JavaScript engine for executing JavaScript code outside of a browser.
   Dawnload and install: https://nodejs.org/en/download/package-manager 

2) Express 
   Express JS is a small framework that works on top of Node web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your  application’s functionality with middleware and routing. It adds helpful utilities to Node HTTP objects and facilitates the rendering of dynamic HTTP objects.
   Reffer the document : https://expressjs.com/en/starter/installing.html

3) MongoDB
   MongoDB is a document-oriented NoSQL database designed for storing, querying, and managing large volumes of data. Unlike traditional relational databases that use tables and rows, MongoDB uses JSON-like documents with flexible schemas, making it easier to handle diverse data types and structures
   Dawnload and install: https://nodejs.org/en/download/package-manager 

4) IDE
   IDE is software that combines commonly used developer tools into a compact GUI application.
   you can use any IDE like VSCode AndroidStudio, Eclipse etc.
   VSCode Dawnload and install: https://code.visualstudio.com/Download
  

## Installation


1. Clone the repository

2. Navigate to the project directory 

3. Install dependencies through terminal cmd:
   ```
   yarn init -y 
   yarn add express mongoose dotenv
   yarn add --dev nodemon
  ```
4. create mongodb collection
   `todolistData.mongodb` file contains the Queries to create collection

5. Set up environment variables
- Create a `.env` file in the root directory.
- Add the following:
  ```
  MONGODB_URI="mongodb://localhost:27017/todo-list"
  PORT="3000"
  ```

6. Start the server
 - locate the terminal to '../TODO-LIST-APP/"
 - run ```npm start```
 - Now you can build attractive front end for this using frontend frameworks...

## API Endpoints

### Task Endpoints
- `GET /api/tasks`: Retrieve a list of all tasks.
- `GET /api/tasks/:id`: Retrieve a single task by its ID.
- `POST /api/tasks`: Create a new task.
- `PUT /api/tasks/:id`: Update an existing task.
- `DELETE /api/tasks/:id`: Delete a task.

## Error Handling
Proper error handling is implemented in the middleware `errorHandler.js`.

## Testing application
You can use POSTMAN application for testing the different api calls CRUD
here is the documentation to install : https://www.postman.com/downloads/
