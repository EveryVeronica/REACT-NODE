


// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBKT-iPHK8pdiaRvNP8s1K2-z3pgtduGlc",
  authDomain: "everyproject-84667.firebaseapp.com",
  databaseURL: "https://everyproject-84667-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "everyproject-84667",
  storageBucket: "everyproject-84667.appspot.com",
  messagingSenderId: "347928684471",
  appId: "1:347928684471:web:6782cbdee1c8632e88aa32",
  measurementId: "G-GPXJ10CGW3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);



export default firebase;

