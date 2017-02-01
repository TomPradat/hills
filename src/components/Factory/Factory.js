import React from 'react';
import './Factory.css';

const Factory = ({onClick}) => (
    <div id="factory-container">
        <button onClick={onClick.bind(this, {r: 50}, 'circle')}>Add circle</button>
        <button onClick={onClick.bind(this, {dot: 'right'}, 'node')}>Add node</button>
    </div>
);

export default Factory;