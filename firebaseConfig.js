import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSfwLSUehuQUKOXe-UZ7UItnOWPN54EOg",
  authDomain: "project1-84501.firebaseapp.com",
  projectId: "project1-84501",
  storageBucket: "project1-84501.firebasestorage.app",
  messagingSenderId: "420160764663",
  appId: "1:420160764663:web:18a1fb9d56d830078371f2",
  measurementId: "G-LR02SWFM1K"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app).addScope('email');

export default app;