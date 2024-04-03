import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBwMFsoHiwo8tCPfXPZ-AwS-6rs3q1Kj_8",
  authDomain: "chat-1f7eb.firebaseapp.com",
  projectId: "chat-1f7eb",
  storageBucket: "chat-1f7eb.appspot.com",
  messagingSenderId: "67150911381",
  appId: "1:67150911381:web:24497e75fdb3ee493c889c",
  measurementId: "G-G026S8C1YW"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();