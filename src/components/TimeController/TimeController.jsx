import React, { useState } from 'react';
import './TimeController.scss';
import Button from '../Button/Button';

function ButtonController(props){
    const [value, setValue] = useState(props.time);
    const changeValue = (value, operator) => {
        if(operator === 'increment'){
            value += 60;
        } else {
            if(value > 0){
                value -= 60;
            } 
        }
        setValue(value);
        props.updateTimer(props.type, value);
    };

    return (
        <div className="ButtonController">
                <Button type="decrement" actionClick={(type) => changeValue(value, type)} className="controlButton">-</Button>
                <div className="wrapperDisplay">
                    <span className="label">{props.label}</span>
                    <span className="time">{value/60} {value > 0 ? 'mins' : 'min'}</span>
                </div>
                <Button type="increment" actionClick={(type) => changeValue(value, type)} className="controlButton">+</Button>
        </div>
    )
};

export default ButtonController;