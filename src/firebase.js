// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNapKgtzgkwHQJOBz8h9BjGOonB8bfdZ0",
  authDomain: "cindyhudev.firebaseapp.com",
  projectId: "cindyhudev",
  storageBucket: "cindyhudev.appspot.com",
  messagingSenderId: "657306235422",
  appId: "1:657306235422:web:0305034ce7a3b6d23d340f",
  measurementId: "G-NPVEFV2G81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);