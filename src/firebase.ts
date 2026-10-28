import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBP3P0fQWumytIMLgwbWkDZl5JAHgikhTc",
  authDomain: "quiz-6d92d.firebaseapp.com",
  projectId: "quiz-6d92d",
  storageBucket: "quiz-6d92d.firebasestorage.app",
  messagingSenderId: "768558049829",
  appId: "1:768558049829:web:1714f0d839a6f2c8ecedcc",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
