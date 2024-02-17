import firebase from 'firebase/app';
import 'firebase/firestore';
// import { initializeApp } from"firebase/app";
// import { getFirestore } from"@firebase/firestore"
import { getFirestore, collection, getDocs } from '@firebase/firestore';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAekt9DpBN1_v1FNJ-bmD-V8NOhv88Ko7I",
  authDomain: "wight-ripperda-weddingwebsite.firebaseapp.com",
  projectId: "wight-ripperda-weddingwebsite",
  storageBucket: "wight-ripperda-weddingwebsite.appspot.com",
  messagingSenderId: "292081583087",
  appId: "1:292081583087:web:430a822a3425f12b286c1a",
  measurementId: "G-L21FPVE2HD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Get a list of cities from your database
async function getHotels() {
    const hotelsCol = collection(db, 'Hotels');
    const hotelSnapshot = await getDocs(hotelsCol);
    const hotelList = hotelSnapshot.docs.map(doc => doc.data());
    return hotelList;
  }
// const analytics = getAnalytics(app);