import React from 'react';
import './ModalDarkMode.scss';

const ModalItem = (props) => {
    return (
        <div className="modal__container">
            <label class="switch">
                <span>Darkmode</span>
                <input type="checkbox"/>
                <span className="slider round"></span>
            </label>
        </div>
    );
}

export default ModalItem;