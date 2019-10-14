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

// Inserir no banco o usuário que logar
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // Buscando dentro do banco para ver se o usuário já existe
  // Ref = usamos para o CRUD
  // Snapshot = dado
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
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
