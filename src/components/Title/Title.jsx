import React from 'react';
import './Title.scss';

const Title = (props) => {
    return (
        <header>
            <h1 className="title">{props.title}</h1>
        </header>
    );
}

export default Title;