// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBN3_nSr210T84YengWJAtaM8mkutUcGo",
  authDomain: "shopping-website-16fb4.firebaseapp.com",
  projectId: "shopping-website-16fb4",
  storageBucket: "shopping-website-16fb4.appspot.com",
  messagingSenderId: "397054544430",
  appId: "1:397054544430:web:15b8124530402fd046edbf",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
