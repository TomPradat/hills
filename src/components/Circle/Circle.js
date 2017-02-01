import React, { Component } from 'react';
import Draggable from 'react-draggable';
import './Circle.css';

const Circle = () => (
  <Draggable 
        defaultPosition={{x: 50, y: 50}}
    >
      <g className="circle">
        <circle cx="0" cy="0" r="50"/>
      </g>
  </Draggable>
);

export default Circle;