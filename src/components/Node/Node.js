import React, { Component } from 'react';
import Draggable from 'react-draggable';
import './Node.css';

class Node extends Component {
  constructor(props) {
    super();
    this.state = {
        width: 100,
        height: 80,
        dot: props.dot ? props.dot : 'top'
    };
  }
  calculateDotPosition() {
      let position;
      const dot = this.state.dot;

      switch(dot){
          case 'top' :
          position = {x: 0, y: -this.state.height/2}
          break;
          
          case 'bottom' :
          position = {x: 0, y: this.state.height/2}
          break;
          
          case 'right' :
          position = {x: this.state.width/2, y: 0}
          break;

          case 'left' :
          position = {x: -this.state.width/2, y: 0}
          break;

          default:
          throw new Error('The dot position is not valid')
      }

      return position;
  }
  render() {
    const dot = this.calculateDotPosition();

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