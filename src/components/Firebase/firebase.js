import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  // apiKey: "AIzaSyAJu5MIWAdqQJom6C5SGe4SZ6K3r2iXMuY",
  // authDomain: "crud-production-1.firebaseapp.com",
  // projectId: "crud-production-1",
  // storageBucket: "crud-production-1.appspot.com",
  // messagingSenderId: "1089150464700",
  // appId: "1:1089150464700:web:c1886cff674d6362d056b9",
  // measurementId: "G-CVWKQFRDDH"
  apiKey            : process.env.REACT_PRO_APIKEY,
  authDomain        : process.env.REACT_PRO_AUTHDOMAIN,
  projectId         : "crud-production-1",
  storageBucket     : process.env.REACT_PRO_STORAGEBUCKET,
  messagingSenderId : process.env.REACT_PRO_MESSAGING_SENDING_ID,
  appId             : process.env.REACT_PRO_APIID,
  measurementId     : process.env.REACT_PRO_MEASUREMENT_ID
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);