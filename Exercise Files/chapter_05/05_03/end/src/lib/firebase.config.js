
import { initializeApp } from "firebase/app";
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
const app = () => {
    if(!firebaseConfig || !firebaseConfig.apiKey) {
        throw new Error('No Firebase configuration object provided.' + '\n' +
        'Add your web app\'s configuration object to firebase-config.js');
    } else {
        console.log('Firebase initialized!')
    }
    return initializeApp(firebaseConfig);
}
export default app