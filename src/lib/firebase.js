import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "react-chatapp-4d64f.firebaseapp.com",
    projectId: "react-chatapp-4d64f",
    storageBucket: "react-chatapp-4d64f.firebasestorage.app",
    messagingSenderId: "446157810476",
    appId: "1:446157810476:web:bb5481cf75da50cdf6da89"
};

const app = initializeApp(firebaseConfig);