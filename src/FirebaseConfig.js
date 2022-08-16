import firebase from 'firebase/compat/app';
import { getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { 
getFirestore, 
collection, 
addDoc, 
Timestamp, 
query, 
orderBy, 
onSnapshot 
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBeLRcj6dm6-KlldP85kOrmNI1HqXUgqrI",
    authDomain: "squad-chat-dae54.firebaseapp.com",
    projectId: "squad-chat-dae54",
    storageBucket: "squad-chat-dae54.appspot.com",
    messagingSenderId: "40910615260",
    appId: "1:40910615260:web:8cc41969096df2401efa19",
    measurementId: "G-NJ37WT4JYR"
}
  
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth();
const db = getFirestore(app);

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

export async function sendDoc(text) {
    try {
        await addDoc(collection(db, 'messages'), {
        message: text,
        username: "Tim Van",
        createdAt: Timestamp.now()
        })
    } catch (err) {
        alert(err)
    }
}

export function getMessages(setMessages) {
    const msgsRef = collection(db, 'messages')
    const order = orderBy('createdAt')
    const q = query(msgsRef, order)
    onSnapshot(q, (snap) => {
        setMessages(snap.docs.map((doc) => ({
            id: doc.id,
            data: doc.data()
        })))
    })
}
