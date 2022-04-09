import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3WdDImusdvYjiEOksOK_WTtZRTD2gWnE",
  authDomain: "clone-ff644.firebaseapp.com",
  projectId: "clone-ff644",
  storageBucket: "clone-ff644.appspot.com",
  messagingSenderId: "1099469031576",
  appId: "1:1099469031576:web:dc3234b262aaf9dc5168ed",
  measurementId: "G-KE0NGB18BJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
