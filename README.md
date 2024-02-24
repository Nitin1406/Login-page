# Login Page and Home Page Implementation

This project is a demonstration of a login page with OTP verification functionality and a home page. It was created as part of a hiring process assessment.

## Features

### Login Page
- Fields for Email and OTP.
- Upon entering the email and submitting the form, an OTP is sent to the provided email address.
- The user then enters the OTP received in their email into the OTP field on the login page.
- Upon successful verification of the OTP, the user is logged in and redirected to the home page.

### Home Page
- Displays a welcome message with the user's email.
- Provides a logout button allowing the user to end their session.

## Functionality Requirements
- Implemented securely to ensure the safety of user data and authentication process.

## Usage
1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the necessary dependencies for both the frontend and backend.
4. After installing dependencies, you need to start both the frontend and backend servers:
   - For the frontend (React), run `npm start` in the `otp-login` directory.
   - For the backend (Express), run `npm start` in the root directory.
5. Access the application in your browser at `http://localhost:3000` (assuming React's default port) and start testing the login functionality.

## Installation
Before running the project, ensure you have Node.js and npm installed on your system. 
Then, follow the steps mentioned in the "Usage" section to install the required Node modules for both the backend and frontend.

## Technologies Used
- React
- Node.js with Express
- Tailwind CSS

## File Structure
- `otp-login`: Contains the React frontend code.
  - `public`: Public assets.
  - `src`: Source code.
- `server.js`: Contains the Node.js with Express backend code.
- `package.json`: Configuration file containing project metadata and dependencies for both frontend and backend.

## Credits
This project was created by Nitin  [https://github.com/Nitin1406].
Coonect with me on Linkedin :-  [https://www.linkedin.com/in/nitin-93a0b2257 ]

## Feedback
If you have any feedback, suggestions, or questions, please feel free to contact me at [nit8948@gmail.com].

Thank you for reviewing this project!
