import React, { Component } from 'react';
import Draggable from 'react-draggable';
import './Node.css';

class Node extends Component {
  calculateDotPosition(dot) {
      let position;

      switch(dot){
          case 'top' :
          position = {x: 0, y: -40}
          break;
          
          case 'bottom' :
          position = {x: 0, y: 40}
          break;
          
          case 'right' :
          position = {x: 50, y: 0}
          break;

          case 'left' :
          position = {x: -50, y: 0}
          break;

          default:
          throw new Error('The dot position is not valid')
      }

      return position;
  }
  render() {
    const dot = this.calculateDotPosition(this.props.dot);

    return (
    <Draggable 
        defaultPosition={{x: 50, y: 40}}
    >
    <g className="diamond">
        <polygon points="0 -40,50 0,0 40,-50 0"/>
        <circle cx={dot.x} cy={dot.y} r="4" />
    </g>
    </Draggable>
    );
  }
}

export default Node;