import React, { Component } from 'react';
import Draggable from 'react-draggable';
import './Circle.css';

class Circle extends Component {
  constructor() {
    super();
    this.state = {
      r: '50',
      data: {
        label: 'test',
        properties: 'test1',
        activity: 'test2'
      }
    };
  }
  listenStart (func) {
    const data = this.state.data;
    func('circle', data);
  }
  render() {
    const handleForm = this.props.handleForm;
    return (
    <Draggable 
        defaultPosition={{x: 50, y: 50}}
        onStart={this.listenStart.bind(this, handleForm)}
    >
      <g className="circle">
        <circle cx="0" cy="0" r={this.state.r}/>
      </g>
    </Draggable>
    );
  }
}

export default Circle;