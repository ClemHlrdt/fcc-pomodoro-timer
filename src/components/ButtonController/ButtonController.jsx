import React from 'react';
import './ButtonController.scss';
import Button from '../Button/Button';

function ButtonController(props) {
    return (
        <div className="ButtonController">
            <Button type="reset" actionClick={type => props.handleClick(type)}>
                <i className="fas fa-undo-alt"></i>
            </Button>
            <Button type="play" actionClick={type => props.handleClick(type)}>
                <i className="fas fa-play"></i>
            </Button>
        </div>
    )
}

export default ButtonController;