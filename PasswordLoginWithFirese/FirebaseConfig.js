// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD4COSyx7iz1zZ-NHKmVoQ9eRWfwK5WbEw",
  authDomain: "emailpasswordlogin-f608a.firebaseapp.com",
  projectId: "emailpasswordlogin-f608a",
  storageBucket: "emailpasswordlogin-f608a.appspot.com",
  messagingSenderId: "417820015846",
  appId: "1:417820015846:web:e295c0cc1e5bfd92238f27"
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app)