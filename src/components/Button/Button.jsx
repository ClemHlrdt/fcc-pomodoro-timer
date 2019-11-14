import React, { useContext } from "react";
import { TimeContext } from '../../TimeContext';
import "./Button.scss";

function Button(props) {
  const [timer, setTimer] = useContext(TimeContext);

  return (
    <button
      id={props.buttonId}
      className={timer.isLight ? 'button button-light' : 'button'}
      onClick={() => props.actionClick(props.type)}
    >
      <span className="content">{props.children}</span>
    </button>
  );
}

export default Button;
