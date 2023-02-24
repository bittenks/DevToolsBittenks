// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVTE751V_hNFipbkj_wQfW2Fuqrj4HRrA",
  authDomain: "toolsdevbittenks.firebaseapp.com",
  databaseURL: "https://toolsdevbittenks-default-rtdb.firebaseio.com",
  projectId: "toolsdevbittenks",
  storageBucket: "toolsdevbittenks.appspot.com",
  messagingSenderId: "1042544153650",
  appId: "1:1042544153650:web:884b8a4813da64a653d82b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};