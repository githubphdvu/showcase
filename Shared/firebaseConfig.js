// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    //of Tubeguruji
//   apiKey: process.env.FIREBASE_API,
//   authDomain: "tubeguruji-app.firebaseapp.com",
//   projectId: "tubeguruji-app",
//   storageBucket: "tubeguruji-app.appspot.com",
//   messagingSenderId: "887202519021",
//   appId: "1:887202519021:web:0bfc7a52188630ccf979e4",
//   measurementId: "G-NJEW24E7FV"

  
apiKey: process.env.FIREBASE_API,
authDomain: "project-allfirebase.firebaseapp.com",
projectId: "project-allfirebase",
storageBucket: "project-allfirebase.appspot.com",
messagingSenderId: "685658262502",
appId: "1:685658262502:web:36884adac300891a91e427"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app