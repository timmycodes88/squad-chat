import firebase from 'firebase/compat/app';
import { getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { 
getFirestore, 
collection, 
addDoc, 
Timestamp, 
query, 
orderBy, 
onSnapshot,
doc,
getDoc,
setDoc,
limit
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
}
  
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth();
const db = getFirestore(app);


//Auth
export function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
}

export function signInOrCreateWithEmail(signIn, email, password) {
    if (signIn) {
        signInWithEmailAndPassword (auth, email, password)
    } else {
        createUserWithEmailAndPassword(auth, email, password)
    }
}

export function signOut() {
    auth.signOut();
}


//DB
export async function sendDoc(text, username, uid) {
    if (!text) return;
    try {
        await addDoc(collection(db, 'messages'), {
        message: text,
        username: username,
        uid: uid,
        createdAt: Timestamp.now()
        })
    } catch (err) {
        alert(err)
    }
}

export function getMessages(setMessages) {
    const msgsRef = collection(db, 'messages')
    const order = orderBy('createdAt', 'desc')
    const max = limit(25);
    const q = query(msgsRef, order, max)
    onSnapshot(q, (snap) => {
        setMessages(snap.docs.reverse().map((doc) => ({
            id: doc.id,
            data: doc.data()
        })))
    })
}

export async function createUser(uid) {
    
}

//This callback takes in a userProfileObject
export async function getUser(uid) {

    //Create User
    const userRef = doc(db, "users", uid);
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
        return userDoc.data()
    }
    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    const newUsername = "New User " + randomNumber;
    const newUserDoc = doc(db, "users", uid);
    const newUserData = {
        username: newUsername
    }
    await setDoc(newUserDoc, newUserData)
    return newUserData
}

export async function updateUserProfile(uid, username) {
    if (!username) return;
    const userRef = doc(db, "users", uid);
    await setDoc(userRef, {username: username}, {merge: true})
}
