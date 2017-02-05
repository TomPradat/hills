import React from 'react';
import './Factory.css';

const circle = {
    r: 50,
    label: 'label',
    properties: 'properties',
    activities: 'activities'
}

const rectangle = {
    label: 'label',
    properties: 'properties',
    sojournTime: 'sojournTime',
    activities: 'activities'
}

const node = {
    dot: 'left'
}

const irectangle = {
    label: 'label',
    properties: 'properties',
    activities: 'activities'
}

const Factory = ({onClick}) => (
    <div id="factory-container">
        <button onClick={onClick.bind(this, 'circle', circle)}>Add circle</button>
        <button onClick={onClick.bind(this, 'node', node)}>Add node</button>
        <button onClick={onClick.bind(this, 'rectangle', rectangle)}>Add Rectangle</button>
        <button onClick={onClick.bind(this, 'irectangle', irectangle)}>Add iRectangle</button>
    </div>
);

export default Factory;