# PlateShare

PlateShare is a Community Food Sharing and Surplus Reduction Platform that connects people to share food resources effectively while minimizing waste.

## Purpose

The platform allows users to donate, request, and manage food resources while implementing robust security and user-friendly features. PlateShare ensures accessibility, responsiveness, and an impactful user experience.

## Live URL

[Live Website](#) (https://plate-share-42586.web.app/)

## Key Features

- **User Authentication**:

  - Email/Password login and registration with Firebase.
  - Google login support.
  - Secure JWT-based private routes.

- **Home Page**:

  - Attractive banner/slider.
  - Featured Foods section showcasing high-quantity food items.
  - Additional sections for enhanced user engagement.

- **Food Management**:

  - Add, update, and delete food entries with private route protection.
  - Manage My Foods page for logged-in users.

- **Food Requests**:

  - Request available foods via a modal with pre-filled information.
  - My Food Requests page for managing requests.

- **Available Foods**:

  - Display all available foods with sorting and search functionality.
  - View Details button for single food details.

- **Enhanced Layout**:

  - Toggle between three-column and two-column layouts on the Available Foods page.

- **Security**:

  - Firebase configuration and MongoDB credentials secured with environment variables.
  - JWT-based authentication.

- **TanStack Query**:

  - Implemented for efficient data fetching and mutation.

- **Responsive Design**:

  - Optimized for mobile, tablet, and desktop devices.

- **Extra Features**:
  - Framer Motion animations.
  - Axios custom hooks for secure API calls.

## Technologies Used

### Frontend

- React
- Tailwind CSS
- Firebase Authentication
- Axios
- Framer Motion

### Backend

- Node.js
- Express.js
- MongoDB
- JWT for authentication

### Deployment

- Vercel/Netlify (Frontend)
- Render/Heroku (Backend)

## NPM Packages Used

- `axios`
- `firebase`
- `react-router-dom`
- `react-icons`
- `tanstack/react-query`
- `dotenv`
- `jsonwebtoken`
- `cors`
- `express`
- `mongodb`
