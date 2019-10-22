import React from 'react';
import './Progress.scss';

const Progress = () => {
    return (
        <div className="wrapperDots">
            <span className="dot completed"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span> 
        </div>
    );
}

export default Progress;