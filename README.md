[Turkish Version](https://github.com/alperenbekci/birthdaytracker/blob/main/README_TR.md)

# Birthday Tracker Platform Documentation

This document provides a detailed explanation of the Birthday Tracker platform, developed in compliance with the test case requirements specified by Paribu. The following aspects will be covered:

- General project information
- Technical details
- Technologies and packages used
- Installation and execution of the project

## About the Project

**Birthday Tracker** is a modern web application that allows users to manage their friends' birthdays. Users can add, edit, delete, and view upcoming birthdays in a highlighted format. The platform helps users keep track of these important dates in an organized manner.

### Key Features:

- **User authentication:** Registration and login.
- **Birthday management:** Adding, editing, and deleting birthdays.
- **Dashboards:** Sorted listing of birthdays and highlighting the prominent ones.
- **Search and filtering:** By name, month, or category.
- **Categories:** Option to categorize birthdays as family, friends, or coworkers.
- **Notifications for upcoming birthdays.**

The platform ensures ease of use for all features through its user-friendly interface and reliable infrastructure.

## Technical Details

### Frontend

- **Technologies:** React, Vite.js, React Router DOM.

#### File Structure:

Under the `src` directory, the following folders are included:

- `components`: Application components.
- `context`: Context API management.
- `hooks`: Custom hook functions.
- `pages`: Page-level components.
- `utils`: Utility functions.

`App.jsx` and `main.jsx` serve as the entry points of the application.

#### Functions:

- Login and register routes are protected using JWT.
- Users can add, delete, or edit birthdays.
- Upcoming birthdays (within a week) are highlighted.
- All birthdays are sorted by the remaining days.
- Users can log out and log in again.
- Users can search and filter birthdays by name, month, and category.
- If a birthday occurs on the current day, a confetti component notifies the user.
- A responsive design ensures ease of use across different devices.

### Backend

- **Technologies:** Node.js, Express.js, MongoDB, Express, Mongoose, JWT, Bcrypt.

#### File Structure:

- `controllers`: Controller layer of the MVC architecture.
- `middleware`: Validation and error handling.
- `models`: Data models.
- `routes`: RESTful endpoint definitions.
- `server.js`: Application entry point.

#### Models:

- User model (`User`).
- Birthday model (`Birthday`).

# API Endpoints

## User Authentication

### POST /api/user/register

- Creates a new user registration.

### POST /api/user/login

- Logs in a user and returns a token.

## Birthday CRUD Operations

### POST /api/birthdays

- Adds a new birthday.

### GET /api/birthdays/

- Retrieves all birthdays belonging to the user.

### GET /api/birthdays/:id

- Retrieves a specific birthday by ID.

### PUT /api/birthdays/:id

- Updates a birthday by ID.

### DELETE /api/birthdays/:id

- Deletes a birthday by ID.

#### Additional Features:

- Detailed feedback for error messages and validations.
- Error management through logging and monitoring mechanisms.

## Requirements Fulfillment

### User Authentication

- Users can register and log in.
- JWT-based authentication is used.
- Passwords are hashed using Bcrypt.
- All user data is securely stored.

### Birthday Management

- Users can add, delete, and edit birthdays.
- Birthdays are sorted based on remaining days.
- Birthdays within a week are highlighted.
- Filter options by name, month, and category are included.
- Visual indicators for upcoming birthdays are provided.

## Installation and Execution

### Requirements

- Node.js (>=14.0.0)
- An IDE or text editor for development (VS Code recommended)

### Installation

1. Clone the project:

   ```bash
   git clone https://github.com/alperenbekci/birthdaytracker
   cd birthday-tracker
   ```

2. Install the required packages:

   ```bash
   cd backend
   npm install
   cd ..
   ```

   ```bash
   cd frontend
   npm install
   ```

3. Create a `.env` file and add the following details:

   ```env
   PORT=PORT
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/birthday-tracker
   SECRET=<your-secret-key>
   ```

4. Create a `.env` file in the frontend folder and add the following information:

   ```env
   VITE_BACKEND_URL=backend_url
   ```

5. Start the application:

   ```bash
   cd backend
   npm run dev
   ```

   ```bash
   cd frontend
   npm run dev
   ```

### MongoDB Atlas Setup

- Create an Atlas cluster.
- Set the database name to `birthday-tracker`.
- Fill in the `MONGO_URI` field in the `.env` file with your user credentials.
- Configure database user permissions via Atlas.

### Development Environment

Use the following command for development:

```bash
npm run dev
```

Code changes are immediately updated in the browser.

## References

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS](https://tailwindcss.com/docs/installation)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Express.js Guide](https://expressjs.com/en/starter/installing.html)
- [JWT Introduction](https://jwt.io/introduction/)
- [Heroku Deployment Guide](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
