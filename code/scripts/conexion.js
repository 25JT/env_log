import {initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js"
import { getFirestore,collection, addDoc ,setDoc, doc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyB1WbAHewTn8keQ1K-zhzIQznmc3K1zXww",
  authDomain: "pruyebas.firebaseapp.com",
  projectId: "pruyebas",
  storageBucket: "pruyebas.appspot.com",
  messagingSenderId: "518510890842",
  appId: "1:518510890842:web:fdbe82875408d22dff6d63",
  measurementId: "G-Y0BRVXBXWS"
  };

   
  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app);
  export{addDoc,collection, setDoc,doc}
  //const analytics = getAnalytics(app);
