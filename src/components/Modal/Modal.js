import React, { useContext } from "react";
import { TimeContext } from "../../TimeContext";
import "./Modal.scss";

const Modal = props => {
  const showHideClassName = props.show ? "modal-show" : "modal-hide";
  const [timer, setTimer] = useContext(TimeContext);
  function toggleModal() {
    setTimer({
      ...timer,
      showModal: !timer.showModal
    });
  }
  return (
    <div id="myModal" className={showHideClassName} onClick={toggleModal}>
      <div className="modal-content">
        <span className="close">&times;</span>
        <div className="modal-header">
          <h3>{props.title}</h3>
        </div>
        <div className="modal-body">{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
