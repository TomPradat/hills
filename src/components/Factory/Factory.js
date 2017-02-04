import React from 'react';
import './Factory.css';

const circle = {
    r: 50,
    label: 'new item',
    properties: 'test',
    activity: 'hello'
}

const Factory = ({onClick}) => (
    <div id="factory-container">
        <button onClick={onClick.bind(this, 'circle', circle)}>Add circle</button>
        <button onClick={onClick.bind(this, 'node', {dot: 'left'})}>Add node</button>
    </div>
);

export default Factory;