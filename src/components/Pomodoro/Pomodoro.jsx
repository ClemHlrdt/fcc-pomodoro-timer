import React, { Component } from 'react';
import './Pomodoro.scss';
import Title from '../Title/Title';
import Timer from '../Timer/Timer';
import Progress from '../Progress/Progress';

class Pomodoro extends Component {
    constructor(){
        super();
        this.state = {  
            progress: [true, false, false, false],
            currentProgress: 0,
            time: 1500,
            break: 300,
        }
        
    }

    render() {
        return (
            <div className="pomodoro">
                <Title title="Pomodoro Timer" />
                <Timer progress={this.state.currentProgress} time={'16:05'}/>
                <Progress progress={this.state.progress}/>
            {/* //TODO create & add timer component
            //TODO create & add timer
            //TODO add title component
            //TODO create & add reset & play / pause components */}
            </div>
            
        );
    }
}

export default Pomodoro;