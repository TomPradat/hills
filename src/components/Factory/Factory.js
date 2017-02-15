import React from 'react';
import './Factory.css';
import {createElement} from './../../actions/element';

const Factory = ({addElement}) => (
    <div id="factory-container">
        <button onClick={() => addElement(createElement('circle'))}>Add circle</button>
        <button onClick={() => addElement(createElement('node'))}>Add node</button>
        <button onClick={() => addElement(createElement('rectangle'))}>Add Rectangle</button>
        <button onClick={() => addElement(createElement('irectangle'))}>Add iRectangle</button>
        <button onClick={() => addElement(createElement('text'))}>Add Text</button>
    </div>
);

export default Factory;