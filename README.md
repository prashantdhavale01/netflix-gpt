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