import React from 'react';
import './Button.scss';

function Button(props) {
    return (
      <button
        id={props.buttonId}
        className="Button"
        onClick={() => props.actionClick(props.type)}
      >
        <span className="content">{props.children}</span>
      </button>
    );
}

export default Button;