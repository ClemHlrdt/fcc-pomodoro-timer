import React from 'react';
import { Circle } from 'rc-progress';
import './Timer.scss';


const Timer = (props) => {
    

    
    return (
        <div className="wrapper">
            <span className="counter">{props.time}</span>
            <div className="spinner">
                <Circle percent={props.progress} strokeWidth="6" strokeColor="#F28458" trailColor="#DCDEED" trailWidth="1"/>
            </div>
        </div>
    );
}

export default Timer;