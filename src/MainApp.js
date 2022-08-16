import tw from 'twin.macro'
import { useState, useEffect } from 'react';
import { signOut, sendDoc, getMessages } from './FirebaseConfig'
import defaultUser from './Images/default-user.png'

export default function MainApp({user}) {

    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');

    let photoURL;
    if (user.photoURL) photoURL = user.photoURL;
    else photoURL = defaultUser;

    useEffect(() => {
        getMessages(setMessages);
    }, [])

    return(
        <>
            <Header>
                <PersonBox>
                    <StyledImg src={photoURL} />
                    <DisplayName>{user.displayName}</DisplayName>
                </PersonBox>
                
                <Title>Squad Chat</Title>

                <SignOutButton onClick={signOut}>Sign Out</SignOutButton>
            </Header>
            <input placeholder='Message...' value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => sendDoc(text)}>Send Message</button>
            {
                messages.map((msg) => (
                    <h2 key={msg.id}>{msg.data.message}</h2>
                ))
            }
        </>
    )
}

const Header = tw.div`flex justify-center border-b h-24 bg-blue-700`;
const PersonBox = tw.div`flex absolute top-4 left-4 items-center`
const Title = tw.h1`text-white text-5xl pt-4`
const StyledImg = tw.img`w-16 h-16 rounded-full mr-4`
const DisplayName= tw.h2`text-lg text-white`
const SignOutButton = tw.button`absolute top-4 right-4 bg-green-600 text-white p-4 rounded-md shadow-md`;
