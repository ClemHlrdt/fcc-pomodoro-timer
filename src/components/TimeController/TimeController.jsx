import React, { useState, useEffect } from 'react';
import './TimeController.scss';
import Button from '../Button/Button';

function TimeController(props){
    const [value, setValue] = useState(props.time);
    const changeValue = (value, operator) => {
        if(operator === 'increment' && value < 3600){
            value += 60;
        } else if(operator === 'decrement' && value > 60) {
            value -= 60;
        }
        setValue(value);
        props.updateTimer(props.type, value);
    };

    useEffect(() => {
        setValue(props.time)
    }, [props.time])

    return (
        <div className="TimeController">
                <Button buttonId={props.label === 'Session' ? 'session-decrement' : 'break-decrement'} type="decrement" actionClick={(type) => changeValue(value, type)} className="controlButton">-</Button>
                <div className="wrapperDisplay">
                    <span id={props.labelId} className="label">{props.label}</span>
                    <span id={props.lengthId} className="time">{value/60}</span>
                </div>
                <Button buttonId={props.label === 'Session' ? 'session-increment' : 'break-increment'} type="increment" actionClick={(type) => changeValue(value, type)} className="controlButton">+</Button>
        </div>
    )
};

export default TimeController;