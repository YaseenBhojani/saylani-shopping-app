import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDcMLf2MqVqa22jazagt4VSqhDfNm0GEOs",
  authDomain: "saylani-shopping-app.firebaseapp.com",
  projectId: "saylani-shopping-app",
  storageBucket: "saylani-shopping-app.appspot.com",
  messagingSenderId: "17721937732",
  appId: "1:17721937732:web:9dd9c8a98a25b9ad261111",
};

const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const db = getFirestore(firebase);
export const storage = getStorage(firebase);