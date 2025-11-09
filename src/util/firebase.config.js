// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHOATX-uLVtA0UN4VWUyMP2meFH6BCZvU",
  authDomain: "pawmart-433f0.firebaseapp.com",
  projectId: "pawmart-433f0",
  storageBucket: "pawmart-433f0.firebasestorage.app",
  messagingSenderId: "680343884129",
  appId: "1:680343884129:web:6b780540220ed04648b520",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
