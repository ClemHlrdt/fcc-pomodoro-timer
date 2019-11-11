import React from 'react';
import { Circle } from 'rc-progress';
import './Timer.scss';

const Timer = props => {
    function formatTime(time) {
        let minutes = Math.floor(time / 60);
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        let seconds = Math.floor(time - minutes * 60);
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        return `${minutes}:${seconds}`;
    }

    return (
        <div className="wrapper">
            <div className="counter">
                <span className="counterType" id="timer-label">
                    {props.mode}
                </span>
                <span id="time-left">{formatTime(props.time.currentTime)}</span>
            </div>
            <div className="spinner">
                <Circle
                    percent={
                        100 -
                        (props.time.currentTime * 100) / props.time.startingTime
                    }
                    strokeWidth="6"
                    strokeColor="#F28458"
                    trailColor="#DCDEED"
                    trailWidth="1"
                />
            </div>
        </div>
    );
};

export default Timer;
