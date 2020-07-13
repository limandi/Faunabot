import React from 'react';
import './InputChat.css';

const InputChat = ({  sendMessage, getMeMessage, msg, chat }) => {
    return (
        <form 
        onSubmit={(e) => sendMessage(e) }
        className='chatbot-chat-input-container'>
            <input
            disabled={ chat.length >= 3 ? true : false}
            placeholder={ chat.length >= 3 ? 'Ya no podés escribir' : 'Escribí tu nombre'}
            value={msg.msg}
            type='text'
            onChange={ (e) => getMeMessage(e.target.value) }
            />
            <button
            type='submit'
            />
        </form>
    )

};

export default InputChat;