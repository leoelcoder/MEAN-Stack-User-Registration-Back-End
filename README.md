# User Registration Backend API

A Node.js backend API for user registration with secure password encryption and validation.

## 🏗️ Architecture

This backend service provides a RESTful API for user registration functionality, built with Node.js and Express.js, using MongoDB for data persistence.

## ✨ Features

- **User Registration**: Secure user registration with email validation
- **Password Encryption**: Bcrypt-based password hashing with salt
- **Data Validation**: Comprehensive input validation and error handling
- **CORS Support**: Cross-origin resource sharing enabled
- **Environment Configuration**: Flexible configuration for different environments

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Security**: bcryptjs for password hashing
- **Validation**: Mongoose schema validation
- **Middleware**: body-parser, cors

## 📁 Project Structure

```
Project/
├── app.js                 # Main application entry point
├── config/
│   ├── config.js         # Environment configuration loader
│   └── config.json        # Environment-specific settings
├── controllers/
│   └── user.controller.js # User registration controller
├── models/
│   ├── db.js             # Database connection
│   └── user.model.js     # User schema and validation
└── routes/
    └── index.router.js    # API route definitions
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd user-registration-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   - Update `config/config.json` with your MongoDB connection string
   - Set environment variables as needed

4. **Start the server**
   ```bash
   npm start
   ```

The server will start on the port specified in your configuration (default: 3000 for development).

## 📡 API Endpoints

### User Registration

**POST** `/api/register`

Register a new user account.

**Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "john.doe@example.com",
  "password": "securepassword123"
}
```

**Response:**
```json
{
  "_id": "user_id",
  "fullName": "John Doe",
  "email": "john.doe@example.com",
  "password": "hashed_password",
  "saltSecret": "salt_value"
}
```

**Error Responses:**
- `422` - Validation errors (duplicate email, invalid email format, password too short)
- `500` - Server errors

## 🔧 Configuration

### Environment Variables

The application uses environment-based configuration:

- `NODE_ENV`: Environment (development/production)
- `PORT`: Server port
- `MONGODB_URI`: MongoDB connection string

### Database Schema

**User Model:**
- `fullName`: String (required)
- `email`: String (required, unique, validated)
- `password`: String (required, min 4 characters, hashed)
- `saltSecret`: String (auto-generated)

## 🔒 Security Features

- **Password Hashing**: Uses bcrypt with salt for secure password storage
- **Email Validation**: Regex-based email format validation
- **Input Validation**: Comprehensive validation for all user inputs
- **Error Handling**: Secure error responses without sensitive data exposure

## 🐳 Docker Support

This application is designed to be containerized and can be deployed using Docker containers orchestration tools like ECS, Kubernetes, or Docker Swarm.

## 📝 Development

### Running in Development Mode

```bash
npm start
```

### Environment Configuration

Update `config/config.json` for different environments:

```json
{
  "development": {
    "PORT": 3000,
    "MONGODB_URI": "mongodb://localhost:27017/userRegistrationDB"
  },
  "production": {
    "PORT": 80,
    "MONGODB_URI": "mongodb://your-production-db/userRegistrationDB"
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.