import {getFirestore} from "@firebase/firestore"
import {getAuth} from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEUeu2DIJLB2hvRwkJxqPagBLR21V3Bio",
  authDomain: "cn-ecommerceapp.firebaseapp.com",
  projectId: "cn-ecommerceapp",
  storageBucket: "cn-ecommerceapp.appspot.com",
  messagingSenderId: "451947678596",
  appId: "1:451947678596:web:585245220b561b7a386bd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
