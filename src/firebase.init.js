// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAOHlQR-VxKIkrj_XggYz4MJ2k19GVvrns",
    authDomain: "ema-jhon-simple-ef538.firebaseapp.com",
    projectId: "ema-jhon-simple-ef538",
    storageBucket: "ema-jhon-simple-ef538.appspot.com",
    messagingSenderId: "897211245422",
    appId: "1:897211245422:web:7335194a72215f57a2d77f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;