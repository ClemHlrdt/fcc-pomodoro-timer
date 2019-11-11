import React, { useContext } from 'react';
import './TimeController.scss';
import Button from '../Button/Button';
import { TimeContext } from '../../TimeContext';

function TimeController(props) {
    const [timer, setTimer] = useContext(TimeContext);

    // update session time / break time on click
    const changeTimer = operator => {
        if (timer.mode === props.type) {
            if (operator === 'decrement' && timer[props.type] > 60) {
                //if the current mode && the type are equal change the currentTime & startingTime
                setTimer({
                    ...timer,
                    [props.type]: timer[props.type] - 60, // change session / break time
                    time: {
                        currentTime: timer[timer.mode] - 60,
                        startingTime: timer[timer.mode] - 60
                    }
                });
            }
            if (operator === 'increment' && timer[props.type] < 3600) {
                setTimer({
                    ...timer,
                    [props.type]: timer[props.type] + 60,
                    time: {
                        currentTime: timer[timer.mode] + 60,
                        startingTime: timer[timer.mode] + 60
                    }
                });
            }
        } else {
            let time = timer.time;
            if (operator === 'decrement' && timer[props.type] > 60) {
                //if the current mode && the type are equal change the currentTime & startingTime
                setTimer({
                    ...timer,
                    [props.type]: timer[props.type] - 60, // change session / break time
                    time: time
                });
            }
            if (operator === 'increment' && timer[props.type] < 3600) {
                setTimer({
                    ...timer,
                    [props.type]: timer[props.type] + 60,
                    time: time
                });
            }
        }
    };

    return (
        <div className="TimeController">
            <Button
                actionClick={() => changeTimer('decrement')}
                className="controlButton"
                buttonId={`${props.type}-decrement`}
            >
                -
            </Button>
            <div className="wrapperDisplay">
                <span id={props.labelId} className="label">
                    {props.label}
                </span>
                <span id={props.lengthId} className="time">
                    {timer[props.type] / 60}
                </span>
            </div>
            <Button
                actionClick={() => changeTimer('increment')}
                className="controlButton"
                buttonId={`${props.type}-increment`}
            >
                +
            </Button>
        </div>
    );
}

export default TimeController;
