import React from 'react';
import Draggable from 'react-draggable';
import './Circle.css';

const Circle = ({r}) => (
  <Draggable 
        defaultPosition={{x: 50, y: 50}}
    >
      <g className="circle">
        <circle cx="0" cy="0" r={r}/>
      </g>
  </Draggable>
);

export default Circle;