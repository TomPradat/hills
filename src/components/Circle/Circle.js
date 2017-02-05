import React from 'react';
import Draggable from 'react-draggable';
import './Circle.css';

const Circle = ({isSelected, r, label, properties, activity, selectElement}) => (
  <Draggable 
        defaultPosition={{x: 50, y: 50}}
        onStart={selectElement}
    >
      <g className={isSelected ? "selected circle" : "circle"}>
        <circle cx="0" cy="0" r={r}/>
        <text x="0" y="0">{label}</text>
      </g>
  </Draggable>
);

export default Circle;