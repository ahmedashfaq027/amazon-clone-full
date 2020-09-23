import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB7VqogvSEUT-yFe3BPWEaMcHKaPXFPqnA",
  authDomain: "challenge-9f988.firebaseapp.com",
  databaseURL: "https://challenge-9f988.firebaseio.com",
  projectId: "challenge-9f988",
  storageBucket: "challenge-9f988.appspot.com",
  messagingSenderId: "356825304483",
  appId: "1:356825304483:web:bb6831e1e7e5fba3241e16",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
