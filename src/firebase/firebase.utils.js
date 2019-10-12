import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAn36KAodv0ET1q5qh_rv6d7YkJLqjO2Dc",
  authDomain: "react-ecommerce-bd.firebaseapp.com",
  databaseURL: "https://react-ecommerce-bd.firebaseio.com",
  projectId: "react-ecommerce-bd",
  storageBucket: "react-ecommerce-bd.appspot.com",
  messagingSenderId: "153693283687",
  appId: "1:153693283687:web:1f958872234455afcf3bc2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;