// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-192e7.firebaseapp.com",
  projectId: "taskmanager-192e7",
  storageBucket: "taskmanager-192e7.appspot.com",
  messagingSenderId: "854645890159",
  appId: "1:854645890159:web:faee3e20a8831c27ac819a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);