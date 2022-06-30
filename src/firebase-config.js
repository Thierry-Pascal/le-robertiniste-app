// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA492zgaFoQMuHqBI7KGzAboK4z_RDGIYA",
  authDomain: "le-robertiniste.firebaseapp.com",
  projectId: "le-robertiniste",
  storageBucket: "le-robertiniste.appspot.com",
  messagingSenderId: "409799758085",
  appId: "1:409799758085:web:0c862f895ae8a40033676c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)