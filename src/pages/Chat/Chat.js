import React, { useState, useEffect } from 'react';
import './Chat.css';
import CatItem from '../Chat/Catitem/Catitem';
import UserItem from './UserItem/UserItem';
import InputChat from './InputChat/InputChat';

const Chat = () => {

    let idCounter = 0;

    const [ msg, setMsg ] = useState({});

    const [ chat, setChat ] = useState([

        {
            id: 0,
            emmitter: 'Cat',
            msg: [ 'Hola!',  'Cómo es tu nombre?',]

        }

    ]);


    function firstResponse(name) {
        let newChat = {
            id: idCounter + 2,
            emmitter: 'Cat',
            msg: [ 
                'Mucho gusto, ' + name + '!',
                'Mi nombre es Fauna, soy un bot aún en desarrollo',
                'Eso quiere decir que aún no estoy preparada para preguntas específicas',
                'Lo que no significa que no podamos interactuar',
                'Haceme una pregunta de la lista y con gusto te respondo!',

            ]
        }
        if(newChat){
            setChat([ ...chat, newChat ])
        }
    };

    useEffect( () => {
        if(chat.length === 2){
            setTimeout(() => firstResponse(msg.msg), 500);
            setMsg({ ...msg, msg:''});
           /* setTimeout(() => setOpenSelect(true), 600); */
        }
    },[chat] );


    function getMeMessage(value) {
        idCounter = idCounter + 1;
        setMsg({
            id: idCounter, 
            emmitter: 'User',
            msg: value
        })
    }

    function sendMessage(e) {
        e.preventDefault();
        setChat([ ...chat, msg ])
    };

    console.log('chat:', chat);
    console.log('msg:', msg);


    return(
        <div className='chatbot-chat-container'>
            <div className='chatbot-chat-content'>
                <div className='chatbot-chat'>
                    <div className='chatbot-chat-container-body'>
                        { chat.map((message, index) =>
                        message.emmitter === 'Cat' ?
                        <CatItem 
                        key={index}
                        text= {message.msg}/>


                        :

                        <UserItem 
                        key={index}
                        text={message.msg} /> 
 
                        )}
                    </div>
                    <div className='chatbot-chat-container-input'>
                        <InputChat
                        msg={msg}
                        getMeMessage={getMeMessage}
                        sendMessage={sendMessage}
                        />
                    </div>


                </div>

            </div>

        </div>
    )
};

export default Chat;