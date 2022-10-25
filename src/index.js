import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHEF00wo5wLYNGmkfAmI36tugYUI8aSHU",
  authDomain: "react-coderhouse-be576.firebaseapp.com",
  projectId: "react-coderhouse-be576",
  storageBucket: "react-coderhouse-be576.appspot.com",
  messagingSenderId: "981574642029",
  appId: "1:981574642029:web:dfd9ae88214831b6989264"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
