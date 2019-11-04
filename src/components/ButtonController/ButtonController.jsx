import React from 'react';
import './ButtonController.scss';
import Button from '../Button/Button';

function ButtonController(props) {
    const playing = props.playing;
    return (
        <div className="ButtonController">
            <Button buttonId="reset" type="reset" actionClick={type => props.handleClick(type)}>
                <i className="fas fa-undo-alt"></i>
            </Button>
            <Button buttonId="start_stop" type="play" actionClick={type => props.handleClick(type)}>
                <i className={`fas ${playing ? "fa-play" : "fa-pause"}`}></i>
            </Button>
        </div>
    )
}

export default ButtonController;