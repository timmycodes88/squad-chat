import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

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
export const auth = firebase.auth();
