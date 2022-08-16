import firebase from 'firebase/compat/app';
import { getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBeLRcj6dm6-KlldP85kOrmNI1HqXUgqrI",
    authDomain: "squad-chat-dae54.firebaseapp.com",
    projectId: "squad-chat-dae54",
    storageBucket: "squad-chat-dae54.appspot.com",
    messagingSenderId: "40910615260",
    appId: "1:40910615260:web:8cc41969096df2401efa19",
    measurementId: "G-NJ37WT4JYR"
}
  
export const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth();

export function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
}

export function signInOrCreate(signIn, email, password) {
    if (signIn) {
        signInWithEmailAndPassword (auth, email, password)
    } else {
        createUserWithEmailAndPassword(auth, email, password)
    }
}

export function signOut() {
    auth.signOut();
}
