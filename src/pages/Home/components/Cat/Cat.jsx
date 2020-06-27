import React from 'react';
import Lottie from 'react-lottie';
import animationCat from './cat-data.json'


const Cat = ({ history }) => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationCat
    };

    function handleOnClick(){
        history.push('/chat')

    };
    
    

    return (
        <div onClick={handleOnClick}
        className='cat-container'> 
        <Lottie options={defaultOptions} 
        />
        
        </div>
        
     
    )

};

export default Cat;