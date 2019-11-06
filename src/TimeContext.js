import React, { useState, createContext } from 'react';

export const TimeContext = createContext();

export const TimeProvider = (props) => {
    // default times
    // const defaultSession = {name: 'session', seconds: 1500, startingValue: 1500};
    // const defaultBreak = {name: 'break', seconds: 300, startingValue: 300};

    // // session progress
    // const [sessionProgress, setSessionProgress] = useState([false, false, false, false]);
    
    // // timer settings
    // const [isBreak, setIsBreak] = useState(false);
    // const [isStopped, setIsStopped] = useState(true);
    

    // const [time, setTime] = useState(defaultSession);
    // const [breakTime, setBreakTime] = useState(defaultBreak);
    // let [currentTimer, setCurrentTimer] = useState(defaultSession);
    const [name, setName] = useState('Clément')
    return (
        <TimeContext.Provider value={'Hello'}>
            {props.children}
        </TimeContext.Provider>
    );
}
