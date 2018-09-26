import React from 'react';

const ColourButton = ({colour, onClick}) => {
    return (<button className={`button button--${colour.toLowerCase()}`} value={colour} onClick={onClick}></button>)
};

export default ColourButton;