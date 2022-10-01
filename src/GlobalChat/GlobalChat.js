import { useState, useEffect } from 'react';
import { sendDoc, getMessages } from '../FirebaseConfig'

export default function GlobalChat() {

    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        getMessages(setMessages);
    }, [])

  return (
    <div>
        <input placeholder='Message...' value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => sendDoc(text)}>Send Message</button>
        {
            messages.map((msg) => (
                <h2 key={msg.id}>{msg.data.message}</h2>
            ))
        }
    </div>
  )
}
