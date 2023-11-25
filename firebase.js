// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8WkcBEFhmVjmx3xLIs1etY9733K4XmO8",
  authDomain: "capstone-project-3a04f.firebaseapp.com",
  projectId: "capstone-project-3a04f",
  storageBucket: "capstone-project-3a04f.appspot.com",
  messagingSenderId: "704977011094",
  appId: "1:704977011094:web:a5c52e4bb7883afcfeddb7",
  measurementId: "G-LX0B5SQBTM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);