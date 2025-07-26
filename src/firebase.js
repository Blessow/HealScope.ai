// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkkRjl9HUeypB4yTUJu0ya6Ph8cCcZLmE",
  authDomain: "heal-scope.firebaseapp.com",
  projectId: "heal-scope",
  storageBucket: "heal-scope.firebasestorage.app",
  messagingSenderId: "782740093950",
  appId: "1:782740093950:web:143ee0d069e93dd5539eaf",
  measurementId: "G-9EL7L9G0ZX"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default app;
export { auth };