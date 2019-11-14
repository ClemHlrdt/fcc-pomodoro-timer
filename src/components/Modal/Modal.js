import React from "react";
import "./Modal.scss";

const Modal = props => {
  const showHideClassName = props.show ? "modal-show" : "modal-hide";

  return (
    <div id="myModal" className={showHideClassName}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>Settings</h2>
        </div>
        <div className="modal-body">
          <p>Some text in the Modal Body</p>
          <p>Some other text...</p>
        </div>
        <div className="modal-footer">
          <h3>Modal Footer</h3>
        </div>
      </div>
    </div>
  );
};

export default Modal;
