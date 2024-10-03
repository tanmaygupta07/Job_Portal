
# Job Portal - Recruiter Session-Based Authentication System

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)

## Introduction

This project is a web-based job portal platform focused on recruiter login, featuring session-based user authentication. The platform enables recruiters to manage job listings and interact with potential candidates.

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
├── public                   # Static assets
│   ├── css                  # Stylesheets
│   ├── html                 # HTML files for emails
│   ├── images               # Image files
│   └── uploads              # Uploaded files
├── src                      # Source files
│   ├── controllers          # Controllers for business logic
│   ├── middlewares          # Middleware functions
│   ├── models               # Database models
│   └── routes               # Application routes
├── views                    # EJS templates for the frontend
├── favicon.ico              # Favicon
├── index.js                 # Application entry point
├── package-lock.json        # NPM lock file
├── package.json             # NPM dependencies
└── server.js                # Server setup
```
