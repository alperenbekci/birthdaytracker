# Birthday Tracker Platform Frontend Documentation

![Group 160](https://github.com/user-attachments/assets/7c2a89ad-6f97-4b3d-895b-404387ed7c2b)

This document provides a detailed explanation of the frontend aspect of the Birthday Tracker platform, which is designed to manage and track user birthdays efficiently.

## Technologies Used

- **React**: For building the user interface.
- **Vite.js**: For faster development and optimized build.
- **React Router DOM**: For client-side routing.

## File Structure

The frontend code is organized under the `src` directory with the following structure:

- **`components`**: Contains reusable UI components such as buttons, forms, and modals.
- **`context`**: Manages global state using the Context API.
- **`hooks`**: Contains custom React hooks for managing specific functionalities.
- **`pages`**: Defines route-level components like Login, Register, Dashboard, and Profile.
- **`utils`**: Utility functions for common operations like date formatting.

Additionally, `App.jsx` and `main.jsx` serve as the entry points of the application.

## Key Functionalities

### Authentication

- **Login**: Users can log in using their credentials. JWT tokens are stored securely.
- **Register**: Users can create a new account to access the platform.
- **Protected Routes**: Certain pages (e.g., Dashboard) are only accessible to authenticated users.


### Birthday Management

- **CRUD Operations**:
  - Add new birthdays through a form.
  - Edit existing birthday entries.
  - Delete unwanted birthday entries.
- **Highlighting**:
  - Birthdays occurring within the next week are visually highlighted.
  - Birthdays on the current day trigger a confetti animation.

### Filtering and Searching

- Search birthdays by name.
- Filter birthdays by month or category (e.g., Family, Friends, Coworkers).

### Responsive Design

The application is fully responsive, ensuring usability across devices:

- **Desktop View**: Optimized layouts for large screens.
- **Mobile View**: Compact design for smaller screens.

## Responsive Styling

- Tailored breakpoints ensure seamless transitions between desktop and mobile views.
- Elements like forms and tables adjust dynamically to fit the screen size.

## Environmental Configuration

Create a `.env` file in the `frontend` directory with the following content:

```env
VITE_BACKEND_URL=http://localhost:5000
```

Replace the URL with your backend server’s deployed address when in production.

## Commands

### Installation

1. Navigate to the `frontend` folder:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Application

Start the development server:

```bash
npm run dev
```

The application will be accessible at `http://localhost:3000` by default.

### Building for Production

To create a production build, run:

```bash
npm run build
```



## Key UI Components

### Dashboard

- Displays a sorted list of birthdays by remaining days.
- Highlights birthdays within a week.
- Includes filtering and search options.

### Forms

- **Add/Edit Form**:

  - Includes fields for name, date, and category.
  - Validates input before submission.

- **Login/Register Form**:
  - Includes username and password fields.
  - Displays validation errors.

### Notifications

- Confetti animation for same-day birthdays.
- Error messages for failed operations.

## Dependencies

Below are the main dependencies used in the frontend:

- **Vite.js**: Build tool for optimized performance.
- **React**: Core library for building the UI.
- **React Router DOM**: Enables routing.



## References

- [React Documentation](https://reactjs.org/docs/getting-started.html)

- [Vite.js](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/docs/en/v6/getting-started/overview)
