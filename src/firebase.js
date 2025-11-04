// ============================================
// STEP 1: Install Firebase in your project
// ============================================
// npm install firebase

// ============================================
// STEP 2: Create firebase.js file
// ============================================
// File: src/firebase.js

import { initializeApp } from "firebase/app";
import { get, getDatabase, onValue, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCRpvHxehb3cmYg0zPPfrNRxWuCuS0fl4s",
  authDomain: "app-db-281f7.firebaseapp.com",
  projectId: "app-db-281f7",
  storageBucket: "app-db-281f7.firebasestorage.app",
  messagingSenderId: "622924879053",
  appId: "1:622924879053:web:f0e8bc3f35284262770584",
  measurementId: "G-K6J077L98R",
  // ✅ Add this line for correct region
  databaseURL:
    "https://app-db-281f7-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Use database in the correct region
const database = getDatabase(app);

export { database, get, onValue, ref, set };

