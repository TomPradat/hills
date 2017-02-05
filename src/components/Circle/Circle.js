import React from 'react';
import Draggable from 'react-draggable';
import './Circle.css';

const Circle = ({isSelected, values, selectElement}) => (
  <Draggable 
        defaultPosition={{x: 50, y: 50}}
        onStart={selectElement}
    >
      <g className={isSelected ? "selected circle" : "circle"}>
        <circle cx="0" cy="0" r={values.r}/>
        <text x="0" y="0">{values.label}</text>
      </g>
  </Draggable>
);

export default Circle;