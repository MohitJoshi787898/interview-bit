// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsS91kLF1TuCwsGBWOZ1Xe0PFcdxqP968",
  authDomain: "promp-388609.firebaseapp.com",
  projectId: "promp-388609",
  storageBucket: "promp-388609.firebasestorage.app",
  messagingSenderId: "721337636664",
  appId: "1:721337636664:web:39f6b096c1fa5bae2593cd",
  measurementId: "G-YXET3QGGS8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
