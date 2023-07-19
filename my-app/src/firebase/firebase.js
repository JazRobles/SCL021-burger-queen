import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf5_uiA98oJpcprlp8Ekzcu6SmM5a2cRc",
  authDomain: "my-burger-8fab9.firebaseapp.com",
  projectId: "my-burger-8fab9",
  storageBucket: "my-burger-8fab9.appspot.com",
  messagingSenderId: "921842014942",
  appId: "1:921842014942:web:c4ba21770945b4e7f9404f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};