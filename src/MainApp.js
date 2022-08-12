import tw from 'twin.macro'
import { auth } from './FirebaseConfig'

export default function MainApp({user}) {

    function signOut() {
        auth.signOut();
    }

    return(
        <>
            <h2>Hi {user.displayName}</h2>
            <button onClick={() => console.log('User: ', user)}>Click Me!</button>
            <SignOutButton onClick={signOut}>Sign Out</SignOutButton>
        </>
    )
}

const SignOutButton = tw.button``;
