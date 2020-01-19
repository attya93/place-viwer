import React from 'react';

import './Avater.css'


const Avater = (props) => {
    return <div className={`avater ${props.className}`} style={props.style}>
        <img
            src={props.imgs}
            alt={props.alts}
            style={{ width: props.width, height: props.height }}
        />
    </div>

}

export default Avater;