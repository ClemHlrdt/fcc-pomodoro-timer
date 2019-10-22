import React, { Component } from 'react';
import './Pomodoro.scss';
import Title from '../Title/Title';
import Timer from '../Timer/Timer';
import Progress from '../Progress/Progress';

class Pomodoro extends Component {
    state = {  }

    
    render() {
        return (
            <div className="pomodoro">
                <Title title="Pomodoro Timer" />
                <Timer progress="20" time={'16:05'}/>
                <Progress />
            {/* //TODO create & add timer component
            //TODO create & add timer
            //TODO add title component
            //TODO create & add reset & play / pause components */}
            </div>
            
        );
    }
}

export default Pomodoro;