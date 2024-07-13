import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// firebase configuration

// const firebaseConfig = {
//   // apiKey: process.env.REACT_APP_API_KEY,
//   // authDomain: process.env.REACT_APP_AUTH_DOMIN,
//   // projectId: process.env.REACT_APP_PROJECT_ID,
//   // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   // appId: process.env.REACT_APP_APP_ID,
//   // measurementId: process.env.REACT_APP_MEASUREMENT_ID,

//   // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   // authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   // projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   // storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   // messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   // appId: import.meta.env.VITE_FIREBASE_APP_ID,

//   apiKey: import.meta.env.VITE_REACT_API_KEY,
//   authDomain: import.meta.env.VITE_REACT_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_REACT_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_REACT_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_REACT_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_REACT_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBXMBb8VS51VYU4_3i4pJFw4HkdnK2IYwc",
  authDomain: "react-quiz-dev-e1759.firebaseapp.com",
  databaseURL:
    "https://react-quiz-dev-e1759-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-quiz-dev-e1759",
  storageBucket: "react-quiz-dev-e1759.appspot.com",
  messagingSenderId: "84750864651",
  appId: "1:84750864651:web:1ad6cfd34d55c1606dd20e",
  measurementId: "G-Z8801KGKQR",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default { app, auth };
