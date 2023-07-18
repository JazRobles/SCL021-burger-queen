// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB84GoA4NNOX2_N9wOkwpyPNVucfvrgCTg",
  authDomain: "burger-queen-1371f.firebaseapp.com",
  projectId: "burger-queen-1371f",
  storageBucket: "burger-queen-1371f.appspot.com",
  messagingSenderId: "664247609865",
  appId: "1:664247609865:web:8a470b54e94cc823d9a6d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};