import React from 'react';

import './Card.css';
//resentation dom component
const Card = (props) => {
    return (
        <div className={`card ${props.className}`} style={props.style}>
            {props.children}
        </div>
    );
};

export default Card;