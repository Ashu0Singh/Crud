import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
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