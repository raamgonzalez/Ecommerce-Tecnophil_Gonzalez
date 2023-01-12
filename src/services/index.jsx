// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDn7FJrF4arQmVkKe6KetQID8Q5_0RVQvE",
  authDomain: "tecnophil-f6dc4.firebaseapp.com",
  projectId: "tecnophil-f6dc4",
  storageBucket: "tecnophil-f6dc4.appspot.com",
  messagingSenderId: "790767849831",
  appId: "1:790767849831:web:7a086faf481b8ab20c9fc2",
  measurementId: "G-TFQYQLJJRB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)