// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_CONFIG_MEASUREMENT_ID,
  // apiKey: "AIzaSyBiMHdztBEvIXnvTzdHkhak5q7iqV8NIF8",
  // authDomain: "apiwaliky.firebaseapp.com",
  // projectId: "apiwaliky",
  // storageBucket: "apiwaliky.appspot.com",
  // messagingSenderId: "892516034254",
  // appId: "1:892516034254:web:7d3069291e8b3397f7129f",
  // measurementId: "G-LM1YMZNRVS"
};

// Initialize Firebase
;
export const app = initializeApp(firebaseConfig);
// // // const analytics = getAnalytics(app);

// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/functions';
// import 'firebase/firestore';

// if (!firebase.apps.length) {
//   firebase.initializeApp({
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
//   });
// }

// export default firebase;