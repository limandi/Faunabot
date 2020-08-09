import React, { useState, useEffect } from 'react';
import './Chat.css';
import CatItem from '../Chat/Catitem/Catitem';
import UserItem from './UserItem/UserItem';
import InputChat from './InputChat/InputChat';
import Select from './Select/Select';
import { doing, aboutMe  } from '../../data/Actions';
import Fade from 'react-reveal'

const Chat = () => {

    let idCounter = 0;

    const [ msg, setMsg ] = useState({});

    const [ openSelect, setOpenSelect ] = useState(false);

    const [ chat, setChat ] = useState([

        {
            id: 0,
            emmitter: 'Cat',
            msg: [ 'Hola!',  'Cómo es tu nombre?']

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
            setTimeout(() => setOpenSelect(true), 600); 
        }
    }, [chat]);


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

    let options = [ 
    {
        id: 'What are you doing?',
        text: 'Qué haces?',
    },
    /*
    {
        id: 'Mandame un meme',
        text: 'Mandame un meme',
    },*/
    {
        id: 'Tell me about you',
        text: 'Contame sobre vos',
    },
];

const [ interactions, setInteractions ] = useState([]);

function handleSelectedOptions(value) {

    let result;

    switch(value) {
        case 'What are you doing?':
            result = doing[Math.floor(Math.random() * doing.length)]
            if(result) {
                setInteractions([ ...interactions, result.msg ])
            }
            break;

            case 'Tell me about you':
                result = aboutMe[Math.floor(Math.random() * aboutMe.length)]
                if(result) {
                    setInteractions([ ...interactions, result.msg ])
                }
                break;

            default:
                console.log('No hay valores');
    }
}


    return(
        <div className='chatbot-chat-container'>
            <div className='chatbot-chat-content'>
                <div className='chatbot-chat'>
                    <div className='chatbot-chat-container-body'>
                     <div className='chatbot-chat-body'>
                        { chat.map((message, index) =>
                        message.emmitter === 'Cat' ? ( 
                        <CatItem 
                        key={index}  text= {message.msg}/>
                        ) : ( 
                        <UserItem 
                        key={index}
                        text={message.msg} /> 
                        )
 
                        )},
                        { openSelect &&
                        <Fade right> 
                        
                        <Select 
                        handleSelectedOptions={handleSelectedOptions}
                        options={options} />
                        </Fade>
                        }

                        {
                            interactions.length > 0 && interactions.map((interaction, index) =>
                            <>
                            <Fade left>
                                <CatItem key={index} text={interaction }> </CatItem>
                            </Fade>
                            <Fade right>
                            <Select 
                            key={index}
                            handleSelectedOptions={handleSelectedOptions}
                            options={options}
                             />
                            </Fade>
                            </>
                            )
                        }
                        
                     </div>
                    </div>
                    <div className='chatbot-chat-container-input'>
                        <InputChat
                        chat={chat}
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