import React, { useState } from 'react';
import './ButtonController.scss';
import Button from '../Button/Button';

function ButtonController(props){
    const [value, setValue] = useState(props.time);

    function handleClick(type){
        if(type === 'increment'){
            setValue(value+1);
        } 
        if (type === 'decrement'){
            if(value > 0){
                setValue(value-1);
            }
        }
    }
    
    return (
        <div className="ButtonController">
                <Button type="decrement" actionClick={handleClick} className="controlButton">-</Button>
                <div className="wrapperDisplay">
                    <span className="label">{props.label}</span>
                    <span className="time">{props.value/60} {value > 0 ? 'mins' : 'min'}</span>
                </div>
                <Button type="increment" actionClick={handleClick} className="controlButton">+</Button>
        </div>
    )
};

export default ButtonController;