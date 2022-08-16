import tw from 'twin.macro'
import { signOut } from './FirebaseConfig'

export default function MainApp({user}) {

    return(
        <>
            <Header>
                <PersonBox>
                    <StyledImg src={user.photoURL} />
                    <DisplayName>{user.displayName}</DisplayName>
                </PersonBox>
                
                <Title>Squad Chat</Title>

                <SignOutButton onClick={signOut}>Sign Out</SignOutButton>
            </Header>
        </>
    )
}

const Header = tw.div`flex justify-center border-b h-24 bg-blue-700`;
const PersonBox = tw.div`flex absolute top-4 left-4 items-center`
const Title = tw.h1`text-white text-5xl pt-4`
const StyledImg = tw.img`w-16 h-16 rounded-full mr-4`
const DisplayName= tw.h2`text-lg text-white`
const SignOutButton = tw.button`absolute top-4 right-4 bg-green-600 text-white p-4 rounded-md shadow-md`;
