
# Job Portal - Recruiter Session-Based Authentication System

[![Deploy on Render](https://img.shields.io/badge/Deployed%20on-Render-blue)](https://job-com-f7a7.onrender.com/)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Future Enhancements](#future-enhancements)

## Introduction

This project is a web-based job portal platform focused on recruiter login, featuring session-based user authentication. The platform enables recruiters to manage job listings and interact with potential candidates. The project is deployed and available [here](https://job-com-f7a7.onrender.com/).

## Features

- Secure, session-based authentication for recruiters.
- Recruiters can post, edit, and delete job listings.
- User-friendly job management dashboard for recruiters.
- Error handling and session timeouts for security.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, JavaScript (EJS for templating)
- **Database**: MongoDB
- **Authentication**: Express-Session for session management
- **Deployment**: Render

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/job-portal.git
   ```
2. Navigate to the project folder:
   ```bash
   cd job-portal
   ```
3. Install the necessary dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```bash
     PORT=3000
     DB_URL=<Your MongoDB URL>
     SESSION_SECRET=<Your Session Secret>
     ```

## Running the Application

1. Start the server:
   ```bash
   npm start
   ```
2. The application will be available at `http://localhost:3000`.

## Project Structure

```
├── views               # EJS templates for the frontend
│   ├── layout.ejs      # Main layout template
│   ├── index.ejs       # Homepage
│   ├── dashboard.ejs   # Recruiter dashboard
├── routes              # Routes for the application
│   ├── auth.js         # Authentication routes
│   ├── jobs.js         # Job-related routes
├── models              # Mongoose models for MongoDB
│   ├── User.js         # Recruiter model
│   ├── Job.js          # Job listing model
├── public              # Static assets (CSS, images, etc.)
├── server.js           # Entry point for the application
└── package.json        # Project dependencies
```

## Future Enhancements

- Add candidate profiles and job applications.
- Enhance recruiter dashboard with analytics.
- Implement email notifications for recruiters and candidates.
