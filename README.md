# NetflixGPT
  - Create React App
    npx create-react-app netflix-gpt

  - Configured Tailwind CSS
    npm install -D tailwindcss
    npx tailwindcss init

    1. tailwind.config.js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: ["./src/**/*.{html,js}"],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    2.  src/input.css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    3. Created components
      - Header
      - Login Form
      - SignUp Form

    4. Setup routes
       - npm i -D react-router-dom

    5. Form Validation
    useRef Hooks

    6. FireBase Installation
      - npm install firebase
      - npm install -g firebase-tools
      - firebase login
      - firebase init
      - npm run build
      - firebaseDeploy - Deploy app on production
      - SignUp and SignIn API Integration - createUserWithEmailAndPassword/signInWithEmailAndPassword
    
    7. Install and configure Redux - Store with userSlice
       npm i -D @reduxjs/toolkit
       npm i react-redux

    8. Implemented SignIn API
    9. Implemented SignOut API
    10. Implemented UpdateProfile API





# Features
  - Login/SignUp
    - Sign In/ SignUp form
    - Redirect to Browser Page
  - Browse (After Authentication)
    - Header
    - Main Movie
      - Trailer
      - Title and Description
      - Movie Suggestion
        - MovieLists * N
  - NetflixGPT
    - SearchBar
    - Movie Suggestion