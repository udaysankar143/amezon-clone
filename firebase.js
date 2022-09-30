import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBmJ_eAPjuDmlNc_GJK_Kk6PuALNliNSG0",
    authDomain: "amezon-clone-13fe8.firebaseapp.com",
    projectId: "amezon-clone-13fe8",
    storageBucket: "amezon-clone-13fe8.appspot.com",
    messagingSenderId: "61431742909",
    appId: "1:61431742909:web:b1a22140137a3e46dbd2d4",
    measurementId: "G-C0V5XDX0RT"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db, auth};