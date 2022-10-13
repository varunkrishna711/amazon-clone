// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCueZWOWU9-wDyedcJKVEHkv6F2t5oO5SU",
    authDomain: "clone-52aef.firebaseapp.com",
    projectId: "clone-52aef",
    storageBucket: "clone-52aef.appspot.com",
    messagingSenderId: "644401872653",
    appId: "1:644401872653:web:e99d3910a9484621bf7a44",
    measurementId: "G-5WJ321G2ZZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();  //initialize database
  const auth = firebase.auth();  //initialize authentication, gives us a variable to use for sign in process

  export { db, auth };
 
  //Go to project settings and add your web app's Firebase project configuration(i.e click config)
  // npm install firbase