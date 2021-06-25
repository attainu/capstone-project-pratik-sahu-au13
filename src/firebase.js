import firebase from "firebase";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBnzMwg9ZK5FHlrxl1e47o8SOKsbmKPY4o",
  authDomain: "cloudversity-6ed5d.firebaseapp.com",
  projectId: "cloudversity-6ed5d",
  storageBucket: "cloudversity-6ed5d.appspot.com",
  messagingSenderId: "475927626481",
  appId: "1:475927626481:web:084a196dd7ce0b8b569f50",
});

const callFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { callFirestore, timestamp };
