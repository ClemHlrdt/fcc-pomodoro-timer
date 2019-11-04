import React, {useState, useEffect} from 'react';
import { Circle } from 'rc-progress';
import './Timer.scss';


const Timer = (props) => {
    //let timer = props.time;
    const [timer, setTimer] = useState(props.time);
    
    useEffect(() => {
        setTimer(props.time);
    }, [props.time]);

    function formatTime(time){
        let minutes = Math.floor(time / 60).toString();
        if(minutes.length === 1){
            minutes = "0"+minutes
        }
        let seconds = (time - minutes * 60).toString();
        if(seconds.length === 1){
            seconds = "0"+seconds
        }
        return `${minutes}:${seconds}`
    }
    
    return (
        <div className="wrapper">
            <div className="counter">
                <span className="counterType" id="timer-label">{timer.name}</span>
                <span id="time-left">{formatTime(timer.seconds)}</span>
            </div>
            <div className="spinner">
                <Circle percent={100-(timer.seconds * 100)/ props.time.startingValue} strokeWidth="6" strokeColor="#F28458" trailColor="#DCDEED" trailWidth="1"/>
            </div>
        </div>
    );
}

export default Timer;