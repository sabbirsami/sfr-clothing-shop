import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9upzl9qONt4W0xdJSlxDBL18uEE-StaI",
    authDomain: "sfr-clothing-store.firebaseapp.com",
    projectId: "sfr-clothing-store",
    storageBucket: "sfr-clothing-store.appspot.com",
    messagingSenderId: "930770555602",
    appId: "1:930770555602:web:129e8be37c89d97096d30b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
