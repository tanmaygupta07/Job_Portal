
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
- **Authentication**: Express-Session for session management
- **Deployment**: Render

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tanmaygupta07/Job_Portal.git
   ```
2. Navigate to the project folder:
   ```bash
   cd Job_Portal
   ```
3. Install the necessary dependencies:
   ```bash
   npm install
   ```

## Running the Application

1. Start the server:
   ```bash
   npm start
   ```
2. The application will be available at `http://localhost:3000`.

## Project Structure

```
├── public              # Static assets (CSS, images, etc.)
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

├── server.js           # Entry point for the application
└── package.json        # Project dependencies

├── public # Static assets
│   ├── css # Stylesheets
│   │   ├── 404.css
│   │   └── index.css
│   ├── html # HTML files for emails
│   │   └── mailTemplate.html
│   ├── images # Image files
│   │   └── banner.png
│   └── uploads # Uploaded files
│   |   └── resume.pdf
├── src # Source files
│   ├── controllers # Controllers for business logic
│   │   ├── job.controller.js
│   │   └── user.controller.js
│   ├── middlewares # Middleware functions
│   │   ├── authMiddleware.js
│   │   ├── fileUploadMiddleware.js
│   │   ├── lastVisitMiddleware.js
│   │   └── sendMail.js
│   ├── models # Database models
│   │   ├── job.model.js
│   │   └── user.model.js
│   └── routes # Application routes
│   |   ├── job.route.js
│   |   └── user.route.js
├── views # EJS templates for the frontend
│   ├── 404.ejs
│   ├── all-applicants.ejs
│   ├── job-details.ejs
│   ├── landing-page.ejs
│   ├── layout.ejs
│   ├── list-all-jobs.ejs
│   ├── new-job.ejs
│   ├── update-job.ejs
│   └── user-login.ejs
├── favicon.ico # Favicon
├── index.js # Application entry point
├── package-lock.json # NPM lock file
├── package.json # NPM dependencies
└── server.js # Server setup
```

## Future Enhancements

- Add candidate profiles and job applications.
- Enhance recruiter dashboard with analytics.
- Implement email notifications for recruiters and candidates.
