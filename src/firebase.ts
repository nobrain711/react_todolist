import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgVLbKk_kGFpVP8fn_BG7bvX2xW_glEo0",
  authDomain: "todolist-d8586.firebaseapp.com",
  projectId: "todolist-d8586",
  storageBucket: "todolist-d8586.appspot.com",
  messagingSenderId: "921491509692",
  appId: "1:921491509692:web:3c06721b3434b76af85bb9",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
