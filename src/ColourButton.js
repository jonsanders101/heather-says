import React from 'react';

const ColourButton = ({colour}) => {
    return (<button className={`button button--${colour}`} value={colour}></button>)
};

export default ColourButton;