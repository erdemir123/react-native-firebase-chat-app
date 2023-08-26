// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8IY_ZgZ8QGGnS74y1y3DNyUvIGWTKuRk",
    authDomain: "chat-app-2e0d4.firebaseapp.com",
    projectId: "chat-app-2e0d4",
    storageBucket: "chat-app-2e0d4.appspot.com",
    messagingSenderId: "184508965755",
    appId: "1:184508965755:web:ad986e8a355a93d53413de"
  };
  
// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app)
export const db = getFirestore(app)