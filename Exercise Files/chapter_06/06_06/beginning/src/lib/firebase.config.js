
import { initializeApp } from "firebase/app";
import {  getFirestore } from "firebase/firestore"
/*
To initialize firebase below, go yo  https://firebase.google.com/docs/web/setup?authuser=0&hl=en#add-sdks-initialize
*/
const firebaseConfig = {
    apiKey: "YOUR-API-KEY",
    authDomain: "YOUR-API-KEY",
    projectId: "YOUR-API-KEY",
    storageBucket: "YOUR-API-KEY",
    messagingSenderId: "YOUR-API-KEY",
    appId: "YOUR-API-KEY"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export default app;
