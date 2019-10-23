import React, { useState, useEffect } from 'react';
import './Pomodoro.scss';
import Title from '../Title/Title';
import Timer from '../Timer/Timer';
import Progress from '../Progress/Progress';
import ButtonController from '../ButtonController/ButtonController';

function Pomodoro() {
   
    const [progress, setProgress] = useState([true, false, false, false]);
    const [currentProgress, setCurrentProgress] = useState(0);
    const [time, setTime] = useState(1500);
    const [breakTime, setBreakTime] = useState(300);

    useEffect(() => {
        document.title = `${currentProgress}%`;
    }, [currentProgress]);

        return (
            <div className="pomodoro">
                <Title title="Pomodoro Timer" />
                <Timer progress={currentProgress} time={'16:05'}/>
                <Progress progress={progress}/>
                <ButtonController value={time} label={"Session"} time={time/60}/>
                <ButtonController value={breakTime} label={"Break"} time={breakTime/60}/>
            {/* //TODO create & add timer component
            //TODO create & add timer
            //TODO add title component
            //TODO create & add reset & play / pause components */}
            </div>
            
        );
}

export default Pomodoro;