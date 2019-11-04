import React, { useState, useEffect } from 'react';
import './Pomodoro.scss';
import Title from '../Title/Title';
import Timer from '../Timer/Timer';
import Progress from '../Progress/Progress';
import TimeController from '../TimeController/TimeController';
import ButtonController from '../ButtonController/ButtonController';

function Pomodoro() {
    // default times
    const defaultSession = {
        name: 'session',
        seconds: 1500,
        startingValue: 1500
    };
    const defaultBreak = { name: 'break', seconds: 300, startingValue: 300 };

    // session progress
    const [sessionProgress, setSessionProgress] = useState([
        false,
        false,
        false,
        false
    ]);

    // timer settings
    const [isBreak, setIsBreak] = useState(false);
    const [isStopped, setIsStopped] = useState(true);

    const [time, setTime] = useState(defaultSession);
    const [breakTime, setBreakTime] = useState(defaultBreak);
    let [currentTimer, setCurrentTimer] = useState(defaultSession);

    // when clicked, toggle isStopped
    function startPauseTimer() {
        setIsStopped(!isStopped);
    }

    function resetTimer() {
        setIsStopped(true);
        setTime(defaultSession);
        setBreakTime(defaultBreak);
        if (currentTimer.name === 'session') {
            setCurrentTimer(time);
        } else {
            setCurrentTimer(breakTime);
        }
    }

    function updateTimer(timer, value) {
        switch (timer) {
            case 'time':
                setTime({ ...time, seconds: value, startingValue: value });
                break;
            case 'breakTime':
                setBreakTime({ ...time, seconds: value, startingValue: value });
                break;
            default:
                break;
        }
    }

    function clickButtonHandler(type) {
        type === 'play' ? startPauseTimer() : resetTimer();
    }
    
    useEffect(() => {
        isBreak ? setCurrentTimer(breakTime) : setCurrentTimer(time);
    }, [breakTime, isBreak, time]);

    useEffect(() => {
        if (!isStopped && currentTimer.seconds >= 0) {
            const interval = setInterval(() => {
                setCurrentTimer({
                    ...currentTimer,
                    seconds: currentTimer.seconds - 1
                });
            }, 1000);
            return () => clearInterval(interval);
        } else if (currentTimer.seconds < 0) {
            setIsBreak(!isBreak);
        }
    }, [breakTime, currentTimer, isBreak, isStopped, time]);

    return (
        <div className="pomodoro">
            <Title title="Pomodoro Timer" />
            <Timer time={currentTimer} />
            <Progress progress={sessionProgress} />
            <TimeController
                durationId={time}
                labelId="session-label"
                type="time"
                lengthId="session-length"
                updateTimer={updateTimer}
                label={'Session'}
                time={time.seconds}
            />
            <TimeController
                durationId={breakTime}
                labelId="break-label"
                lengthId="break-length"
                type="breakTime"
                updateTimer={updateTimer}
                label={'Break'}
                time={breakTime.seconds}
            />
            <ButtonController
                playing={isStopped}
                handleClick={type => clickButtonHandler(type)}
            />
        </div>
    );
}

export default Pomodoro;
