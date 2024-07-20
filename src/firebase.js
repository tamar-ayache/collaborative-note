import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// הגדרות Firebase שלך :)
const firebaseConfig = {
    apiKey: "AIzaSyAfMdP50KnBW-zKlbFMByC1IdfJRpWzw-E",
    authDomain: "tamar-7ed4a.firebaseapp.com",
    projectId: "tamar-7ed4a",
    storageBucket: "tamar-7ed4a.appspot.com",
    messagingSenderId: "318271453290",
    appId: "1:318271453290:web:71d30c25a58747811eb213",
    measurementId: "G-WBL3W47F0V"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
