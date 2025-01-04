// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl6UibT3Pt2LSQ4P9h-y6MnBo9EpNQW_E",
  authDomain: "netflixgpt-4588c.firebaseapp.com",
  projectId: "netflixgpt-4588c",
  storageBucket: "netflixgpt-4588c.firebasestorage.app",
  messagingSenderId: "932807253608",
  appId: "1:932807253608:web:f1502aca494ad56ac365dd",
  measurementId: "G-22FTLF2W40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();