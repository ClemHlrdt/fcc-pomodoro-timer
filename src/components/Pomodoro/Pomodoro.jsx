import React, { useEffect, useContext, useRef} from 'react';
import './Pomodoro.scss';
import Title from '../Title/Title';
import Timer from '../Timer/Timer';
import Progress from '../Progress/Progress';
import TimeController from '../TimeController/TimeController';
import ButtonController from '../ButtonController/ButtonController';
import { TimeContext } from '../../TimeContext';

function Pomodoro() {
    
    const [timer, setTimer] = useContext(TimeContext);
    // create ref for the audio
    const beep = useRef();
    

    useEffect(() => {
        if(timer.active  && timer.time.currentTime > 0){
                const interval = setInterval(() => {
                    setTimer({
                        ...timer, 
                        time: {
                            startingTime: timer.time.startingTime,
                            currentTime: timer.time.currentTime-1
                    }});
                }, 1000);
                return () => clearInterval(interval);
        } else if (timer.time.currentTime === 0) {
                beep.current.play();
                beep.current.currentTime = 0;
                //    setTimeout(() => {
                       if (timer.mode === 'session') {
                           setTimer({
                               ...timer,
                               time: {
                                   currentTime: timer.break,
                                   startingTime: timer.break
                               },
                               mode: 'break',
                           });
                       }
                       if (timer.mode === 'break') {
                           setTimer({
                               ...timer,
                               time: {
                                   currentTime: timer.session,
                                   startingTime: timer.session
                               },
                               mode: 'session',
                               progress: timer.progress+1,
                           });
                       }
                //    }, 2500);
                   
               }
    }, [setTimer, timer]);

    useEffect(() => {
        if(timer.playPause){
            beep.current.pause();
            beep.current.currentTime = 0;
        }
    })

     return (
         <div className="pomodoro">
             <Title title={timer.name} />
             <Timer time={timer.time} mode={timer.mode} />

             <Progress progress={timer.progress} />

             <TimeController
                 durationId={timer.session}
                 type="session"
                 label={'Session'}
                 lengthId={'session-length'}
                 labelId={'session-label'}
             />
             <TimeController
                 durationId={timer.break}
                 type="break"
                 label={'Break'}
                 lengthId={'break-length'}
                 labelId={'break-label'}
             />
             <ButtonController playing={timer.active} myRef={beep}/>
             <audio
                 id="beep"
                 preload="auto"
                 src="https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
                 ref={beep}
             ></audio>
         </div>
     );
}

export default Pomodoro;