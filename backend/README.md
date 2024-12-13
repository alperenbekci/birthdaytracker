# Birthday Tracker Platform Backend Documentation
![Group 160](https://github.com/user-attachments/assets/a04471ca-ec24-401a-a177-3e586a82dcf8)

This document provides a detailed explanation of the backend implementation of the Birthday Tracker platform.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.

- **Express.js**: Framework for building RESTful APIs.
- **MongoDB**: Database for storing user and birthday data.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB.
- **JWT (Json Web Token)**: For secure authentication.
- **Bcrypt**: For password hashing.

## File Structure

The backend code is organized with the following structure:

- **`controllers`**: Contains the logic for handling API requests.
- **`middleware`**: Includes authentication and error-handling middleware.
- **`models`**: Defines the database schema using Mongoose.
- **`routes`**: Defines the API endpoints and maps them to controllers.
- **`server.js`**: Entry point for the backend application.

## Key Functionalities

### User Authentication

- **Register**:
  - Creates a new user with a hashed password.
  - Validates the email and password format.
- **Login**:
  - Authenticates the user and returns a JWT token.
  - Validates credentials.
- **JWT Protection**:
  - Secures API routes using JWT tokens.

### Birthday Management

- **CRUD Operations**:
  - Add, edit, delete, and retrieve birthday records.
  - Ensure that each birthday is associated with a specific user.


### Error Handling

- Centralized error-handling middleware ensures consistent error responses.
- Includes input validation errors and server errors.

## Models

### User Model

The `User` schema defines the structure for storing user data:

```javascript
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("User", UserSchema);
```

### Birthday Model

The `Birthday` schema defines the structure for storing birthday data:

```javascript
const birthdaySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dates: {
      type: Date,
      required: true,
    },
    type: {
      type: String,
      enum: ["friend", "family", "colleague"],
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
```

## API Endpoints

### User Authentication

#### POST `/api/user/register`

 - Registers a new user.


#### POST `/api/user/login`

- Logs in a user and returns a token.


### Birthday CRUD Operations

#### POST `/api/birthdays`

 - Adds a new birthday.


#### GET `/api/birthdays`

- Retrieves all birthdays associated with the user.


#### GET `/api/birthdays/:id`

- Retrieves a specific birthday by ID.

#### PUT `/api/birthdays/:id`

- Updates an existing birthday.


#### DELETE `/api/birthdays/:id`

- Deletes a specific birthday by ID.

## Environmental Configuration

Create a `.env` file in the backend directory with the following variables:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/birthday-tracker
SECRET=<your-secret-key>
```

## Commands

### Installation

1. Navigate to the `backend` folder:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Server

Start the development server:

```bash
npm run dev
```

The server will run on `http://localhost:5000` by default.

### Deployment

Use the following commands to deploy the application:

1. Build the application (if required).
2. Deploy using services like Heroku, AWS, or DigitalOcean.

## References

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express.js Guide](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)
- [JWT Introduction](https://jwt.io/introduction/)
