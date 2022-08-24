import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
//import firebaseConfig from './config'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeI5c8xYHdejmJ2lxgXWFq8Gpk4GAt77w",
  authDomain: "pizzashop-f6dd0.firebaseapp.com",
  projectId: "pizzashop-f6dd0",
  storageBucket: "pizzashop-f6dd0.appspot.com",
  messagingSenderId: "936067885193",
  appId: "1:936067885193:web:1cd67e672730638565be58",
  measurementId: "G-Z7EV5MVK8E",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default firebase;