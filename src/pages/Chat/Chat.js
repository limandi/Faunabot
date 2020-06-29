import React from 'react';
import './Chat.css';
import CatItem from '../Chat/Catitem/Catitem';
import UserItem from './UserItem/UserItem';

const Chat = () => {
    return(
        <div className='chatbot-chat-container'>
            <div className='chatbot-chat-content'>
                <div className='chatbot-chat'>
                    <div className='chatbot-chat-container-body'>
                        <CatItem/>
                        <UserItem/> 

                    </div>

                </div>

            </div>

        </div>
    )
};

export default Chat;