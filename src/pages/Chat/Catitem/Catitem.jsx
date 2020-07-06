import React from 'react';
import './Catitem.css';
import Fade from 'react-reveal/Fade';
import catAvatar from '../../../assets/images/fauna.png';

const CatItem = ({ text }) => {

    return (
        <div className='cat-item-container'>
            <img src={catAvatar} alt='cat-avatar' />
            <div   className= 'cat-item-messages'> 
            <Fade right>
            { text.map((t, index) =>
            <label key={index}> {t} </label>
            )}
               </Fade>
            </div>
           
        </div>
    )

    
}

export default CatItem;