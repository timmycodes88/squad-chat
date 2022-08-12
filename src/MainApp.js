import tw from 'twin.macro'
import { auth } from './FirebaseConfig'

export default function MainApp({user}) {

    function signOut() {
        auth.signOut();
    }

    return(
        <>
            <PersonBox>
                <StyledImg src={user.photoURL} />
                <DisplayName>{user.displayName}</DisplayName>
            </PersonBox>
            

            <SignOutButton onClick={signOut}>Sign Out</SignOutButton>
        </>
    )
}


const PersonBox = tw.div`m-auto flex items-center mt-4 ml-4`
const StyledImg = tw.img`w-16 h-16 rounded-full mr-4`
const DisplayName= tw.h2`text-lg`
const SignOutButton = tw.button`absolute top-4 right-4 bg-green-600 text-white p-4 rounded-md`;
