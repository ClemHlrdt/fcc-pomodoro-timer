import React from 'react';
import './Button.scss';

function Button(props) {
    return(
        <button className="Button" onClick={() => props.actionClick(props.type)}>
            {props.children}
        </button>
    )
}

export default Button;