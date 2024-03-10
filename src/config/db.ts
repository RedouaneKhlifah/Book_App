// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import getDotenv from "src/utils/dotenv";

const firebaseConfig = {
    apiKey: getDotenv("FIREBASE_API_KEY"),
    authDomain: getDotenv("FIREBASE_AUTH_DOMAIN"),
    projectId: getDotenv("FIREBASE_PROJECT_ID"),
    storageBucket: getDotenv("FIREBASE_STORAGE_BUCKET"),
    messagingSenderId: getDotenv("FIREBASE_MESSAGING_SENDER_ID"),
    appId: getDotenv("FIREBASE_APP_ID"),
    measurementId: getDotenv("FIREBASE_MEASUREMENT_ID")
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
