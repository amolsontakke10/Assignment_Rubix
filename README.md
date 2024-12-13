# README for Rubix-Assignment

This project demonstrates a basic CRUD (Create, Read, Update, Delete) application for managing streams of data. It uses React, Redux, and JSON Server as the backend. Semantic UI is utilized for styling components.

## **Getting Started**

### 1. Prerequisites

- Node.js and npm installed on your system.

### 2. Clone the Repository
git clone https://github.com/amolsontakke10/Assignment_Rubix

### 3. Install Project Dependencies

## Frontend Dependencies:
Navigate to the `Assignment_Rubix-main` directory 
npm install
## Backend Dependencies:
Navigate to the `streams-server` directory 
npm install

### 4 Running the Application
### 4.1. Start the Backend (JSON Server)
Navigate to the `streams-server` directory and start the server:
npm start

### 4.2. Start the React Frontend
Navigate to the `Assignment_Rubix-main` directory and start the frontend:
npm start

## Technologies Used
- React: Component-based frontend library.
- React Redux: Simplified state management.
- xios: API communication.
- JSON Server: Mock backend server.
- Semantic UI: Prebuilt UI components.

## File Overview

├── src/
|   ├──  actions
|   |   ├── index.js
│   ├── components/
│   │   ├── CreateStream.js  // Form to add new streams.
│   │   ├── StreamEdit.js  // Modal to confirm deletion.
│   │   └── StreamList.js  // Displays all streams.
│   ├── reducers
│   │   ├── streamsReducer  // Reducer for streams.
│   ├── App.js  // Main app layout.
│   ├── store.js  // Configures the Redux store.
│   └── index.js  // Entry point.
|── stream-server
|    ├── db.json


```
