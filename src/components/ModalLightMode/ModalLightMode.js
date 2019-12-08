import React, { useContext } from "react";
import classes from "./ModalLightMode.scss";
import { TimeContext } from "../../TimeContext";

const ModalItem = props => {
  const [timer, setTimer] = useContext(TimeContext);

  function toggleDarkMode() {
    setTimer({
      ...timer,
      isLight: !timer.isLight
    });
  }
  return (
    <div className={classes.modal__container}>
      <span>Light mode:</span>
      <div className="item">
        <input
          onChange={toggleDarkMode}
          type="checkbox"
          name="toggle"
          id="toggle"
        />
      </div>
    </div>
  );
};

export default ModalItem;
