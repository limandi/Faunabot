import React from 'react';
import './InputChat.css';

const InputChat = ({  sendMessage, getMeMessage, msg }) => {
    return (
        <form 
        onSubmit={(e) => sendMessage(e) }
        className='chatbot-chat-input-container'>
            <input
            placeholder='Escribí tu nombre'
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