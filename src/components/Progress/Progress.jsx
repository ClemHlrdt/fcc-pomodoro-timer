import React from 'react';
import './Progress.scss';

const Progress = (props) => {
    const progress = props.progress;
    return (
        <div>
            {
                progress.map((item, index) => (
                    <span key={index} className={`dot ${progress[index] ? 'completed' : ''}`}></span>
                ))
            }
            
        </div>
    );
}

export default Progress;