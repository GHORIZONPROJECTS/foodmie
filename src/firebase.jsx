import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCJKA2c7PGokIJS-NaXBm_6EOrnNhEOVGw",
  authDomain: "foodmie-df99e.firebaseapp.com",
  projectId: "foodmie-df99e",
  storageBucket: "foodmie-df99e.appspot.com",
  messagingSenderId: "1023456465871",
  appId: "1:1023456465871:web:41bf6fba7cef64f9b238ba",
  measurementId: "G-8LB7W9B0X7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);