import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHDl71wJKvgwXpyrxxVHs-4XXX43d5qPs",
  authDomain: "fireandforget-2e5b0.firebaseapp.com",
  projectId: "fireandforget-2e5b0",
  storageBucket: "fireandforget-2e5b0.appspot.com",
  messagingSenderId: "15870799329",
  appId: "1:15870799329:web:92ee81fea8923ad534f6a0",
};

const firestore = initializeApp(firebaseConfig);
const db = getFirestore(firestore);

export { db, firestore };
