// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-dc219.firebaseapp.com",
  projectId: "taskmanager-dc219",
  storageBucket: "taskmanager-dc219.appspot.com",
  messagingSenderId: "493272353814",
  appId: "1:493272353814:web:539d9bc306659acf693937"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);