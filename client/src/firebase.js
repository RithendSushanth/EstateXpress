// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estatexpress-42ee0.firebaseapp.com",
  projectId: "estatexpress-42ee0",
  storageBucket: "estatexpress-42ee0.appspot.com",
  messagingSenderId: "87694472309",
  appId: "1:87694472309:web:6fdc1348eadd547918f43c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);