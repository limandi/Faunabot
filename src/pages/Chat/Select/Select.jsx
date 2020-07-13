import React from 'react';
import './Select.css';

const Select = ({ options, handleSelectedOptions }) => {
    return (
        <div className='selector-content'>
            <div className='selector-container'>
                { options.map(op =>
                    <div
                    onClick={ (e) => handleSelectedOptions(op.id)}
                     key={op.id} 
                     className='selector-options'>
                    <label> {op.text} </label>
                    </div>
                    ) }
                
            </div>
        </div>

    );
};

export default Select;