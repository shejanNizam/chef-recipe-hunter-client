// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKLJPPR_dEQsNBX4DmGu1fRTM0RkoDj0g",
  authDomain: "chef-recipe-hunter-c46b2.firebaseapp.com",
  projectId: "chef-recipe-hunter-c46b2",
  storageBucket: "chef-recipe-hunter-c46b2.appspot.com",
  messagingSenderId: "960445488079",
  appId: "1:960445488079:web:9b28a37e4e5a6ecc7f50ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
