import tw, { styled } from 'twin.macro'
import { useState, useEffect, useRef } from 'react';
import { sendDoc, getMessages, auth } from '../FirebaseConfig'
import { useAuthState } from 'react-firebase-hooks/auth';
import { ReactComponent as SendIcon } from '../assets/svgs/send-btn.svg';

export default function GlobalChat() {
    const [user] = useAuthState(auth);

    const scrollRef = useRef();

    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        getMessages(setMessages);
    }, [])

    useEffect(() => {
        scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }, [messages])

    return (
        <Wrapper>
            <MessagesContainer>
                {
                    messages.map((msg) => {
                        const isSender = msg.data.username === user.displayName ? 1 : 0
                        return (
                            <MessageContainer key={msg.id} isSender={isSender}>
                                <p>{msg.data.username}</p>
                                <MessageBubble isSender={isSender}>
                                    <h2>{msg.data.message}</h2>
                                </MessageBubble>
                            </MessageContainer>
                        )
                    })
                }
                <div ref={scrollRef}></div>
            </MessagesContainer>

            <TypingContainer>
                <MessageBar placeholder='Message...' value={text} onChange={(e) => setText(e.target.value)} />
                <SendButton onClick={() => { sendDoc(text, user.displayName); setText(''); }}><StyledSendIcon /></SendButton>
            </TypingContainer>

        </Wrapper>
    )
}

//Layout
const Wrapper = tw.div`relative mx-auto mt-20 border-2 border-red-500 rounded-2xl bg-gray-50 max-w-[500px] h-[500px]`;

//Messages
const MessagesContainer = tw.div`h-[420px] overflow-y-auto mx-2 mt-2 `;
const MessageContainer = styled.div(({ isSender }) => [
    tw`max-w-[40%]`,
    isSender ? tw`ml-auto` : tw`mr-auto`
])
const MessageBubble = styled.div(({ isSender }) => [
    tw`px-2 py-1 rounded-md`,
    isSender ? tw`bg-blue-500 text-white` : tw`bg-gray-200 text-black`
])

//Tyoing
const TypingContainer = tw.div`absolute bottom-0 px-2 py-4 flex items-center w-full bg-white rounded-2xl`
const MessageBar = tw.input`mx-2 w-full py-1 px-2 rounded-lg border outline-none focus:outline-color[rgba(37, 99, 235, 1)]`
const SendButton = tw.button`inline mx-2`
const StyledSendIcon = tw(SendIcon)`w-9 h-9 p-1 text-blue-600 border-2 rounded-full border-blue-600`
