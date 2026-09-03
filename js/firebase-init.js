// Firebase SDK imports
import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
    getDatabase
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";


// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUqTs_62N7zQr62eB5jwJc0ksQbMQG920",
    authDomain: "yearnly.firebaseapp.com",
    databaseURL: "https://yearnly-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "yearnly",
    storageBucket: "yearnly.firebasestorage.app",
    messagingSenderId: "1055364716470",
    appId: "1:1055364716470:web:9198f2f64701ad48c41317",
    measurementId: "G-KFR2WGWF81"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Authentication
const auth = getAuth(app);


// Initialize Realtime Database
const database = getDatabase(app);


// Make them available to other JavaScript files
export {
    app,
    auth,
    database
};