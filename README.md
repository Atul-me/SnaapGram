
# Social Media Application

This Social Media Application is a dynamic platform built with ReactJS, NodeJS, TailwindCSS, and MongoDB. It features user authentication using bcrypt.js, a theme-switching capability, and friend management functionalities to enhance user engagement.

## Features

- **User Authentication**: Secure registration and login using bcrypt.js for strong authentication.
- **Theme Switching**: Offers both dark and light modes for personalized user experience.
- **Friend Management**: Allows users to manage friends, share posts, and engage through comments.

## Live Demo

Check out the live application [here](https://snaap-gram.vercel.app/).

## GitHub Repository

You can find the source code on GitHub [here](https://github.com/Atul-me/SnaapGram.git).

## Installation and Setup

To run this project locally, follow these steps:

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Clone the Repository

```bash
git clone https://github.com/Atul-me/SnaapGram.git
cd social-media-application
```

### Backend Setup

1. Navigate to the `backend` directory.

   ```bash
   cd backend
   ```

2. Install dependencies.

   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add the following environment variables:

   ```
   NODE_ENV=development
   PORT=5000
   MONGO_URI=your_mongo_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server.

   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the `frontend` directory.

   ```bash
   cd frontend
   ```

2. Install dependencies.

   ```bash
   npm install
   ```

3. Start the frontend server.

   ```bash
   npm start
   ```

### Deployment

The application is deployed on Vercel. To deploy your own instance, follow Vercel's deployment documentation and connect it to your GitHub repository.

## Technologies Used

- **Frontend**: ReactJS, TailwindCSS
- **Backend**: NodeJS, ExpressJS
- **Database**: MongoDB
- **Authentication**: bcrypt.js
- **Deployment**: Vercel

## Contributing

We welcome contributions! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

