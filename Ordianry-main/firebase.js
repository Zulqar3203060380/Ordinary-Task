import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  updateDoc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6JaNS5ZFT62-3YO-eRq2AuIfQ4Yto4do",
  authDomain: "ordinary-task-a09fd.firebaseapp.com",
  projectId: "ordinary-task-a09fd",
  storageBucket: "ordinary-task-a09fd.appspot.com",
  messagingSenderId: "666767135653",
  appId: "1:666767135653:web:2d2d8b1e87503df60b0e4c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
export {
  app,
  db,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  setDoc,
  getAuth,
  getDoc,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  auth,
};
