import React from 'react';
import './UserItem.css';
import Fade from 'react-reveal/Fade';
import User from '../../../assets/images/Usuario.png';

const UserItem = ( {text} ) =>{
    return (
        <div className='user-item-container'> 
        <div className='user-item-messages'>
        <Fade left>
    <label> {text} </label>
    </Fade>
    

        </div>
        <img src={User} alt="user-avatar"/>
    
        
        </div>

    )
};

export default UserItem;