import React from 'react';
import './UserItem.css';
import User from '../../../assets/images/Usuario.png';

const UserItem = ( {text} ) =>{
    return (
        <div className='user-item-container'> 
        <div className='user-item-messages'>
    <label> {text} </label>

        </div>
        <img src={User} alt="user-avatar"/>
    
        
        </div>

    )
};

export default UserItem;