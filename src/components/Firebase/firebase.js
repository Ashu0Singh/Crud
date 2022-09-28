import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey            : process.env.REACT_APIKEY,
  authDomain        : process.env.REACT_AUTHDOMAIN,
  projectId         : "crud-development-0",
  storageBucket     : process.env.REACT_STORAGEBUCKET,
  messagingSenderId : process.env.REACT_MESSAGING_SENDING_ID,
  appId             : process.env.REACT_APIID,
  measurementId     : process.env.REACT_MEASUREMENT_ID
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);