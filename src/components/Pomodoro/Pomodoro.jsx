import React, { useState, useEffect } from 'react';
import './Pomodoro.scss';
import Title from '../Title/Title';
import Timer from '../Timer/Timer';
import Progress from '../Progress/Progress';
import TimeController from '../TimeController/TimeController';
import ButtonController from '../ButtonController/ButtonController';

function Pomodoro() {
   
    const [progress, setProgress] = useState([true, false, false, false]);
    const [currentProgress, setCurrentProgress] = useState(0);
    const [time, setTime] = useState(1500);
    const [breakTime, setBreakTime] = useState(300);
    const [isRunning, setIsRunning] = useState(false);

    function startTimer(time){
        let currentValue=time;
        let countdown = setInterval(function(){
                setTime(currentValue-=1);
            }, 1000);
        if(currentValue > 0){
            countdown();
        } else {
            clearInterval(countdown);
        }
        console.log(currentValue)
    }

    function resetTimer(time){
        setTime(time);
    }

    function updateTimer(timer, value){
        console.log('called', timer, value);
        switch (timer) {
            case 'time':
                setTime(value);
                break;
            case 'breakTime':
                setBreakTime(value);
                break;
            default:
                break;
        }
    }

    function formatTime(time){
        let minutes = Math.floor(time / 60).toString();
        let seconds = (time - minutes * 60).toString();
        if(seconds.length === 1){
            seconds = "0"+seconds
        }
        return `${minutes}:${seconds}`
    }

    function clickButtonHandler(type){
        if(type === 'play'){
            console.log('play', time)
            startTimer(time);
        }
        if(type === 'reset'){
            resetTimer(time);
        }
    }
    useEffect(() => {
        document.title = `${currentProgress}%`;
    }, [currentProgress]);

    
     return (
        <div className="pomodoro">
            <Title title="Pomodoro Timer" />
            <Timer progress={currentProgress} time={formatTime(time)}/>
            <Progress progress={progress}/>
            <TimeController type="time" updateTimer={updateTimer} label={"Session"} time={time}/>
            <TimeController type="breakTime" updateTimer={updateTimer} label={"Break"} time={breakTime}/>
            <ButtonController handleClick={type => clickButtonHandler(type)}/>
            
            {/* //TODO create & add timer component
            //TODO create & add timer
            //TODO add title component
            //TODO create & add reset & play / pause components */}
        </div>
            
    );
}

export default Pomodoro;