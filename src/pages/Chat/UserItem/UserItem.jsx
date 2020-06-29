import React from 'react';
import './UserItem.css';
import User from '../../../assets/images/Usuario.png';

const UserItem = () =>{
    return (
        <div className='user-item-container'> 
        <div className='user-item-messages'>
            <label>Mensaje</label>

        </div>
        <img src={User} alt="user-avatar"/>
    
        
        </div>

    )
};

export default UserItem;