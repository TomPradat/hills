import React, { Component } from 'react';
import Draggable from 'react-draggable';

class BlackCircle extends Component {
    constructor() {
        super();
        this.state = {
            r: '10',
            deltaPosition: {
                x: 0, y: 0
            },
        };
    }
    handleDrag(e, ui) {
      const {x, y} = this.state.deltaPosition;
      this.setState({
        deltaPosition: {
          x: x + ui.deltaX,
          y: y + ui.deltaY,
        }
      });
    }
    render() {
        return (
            <Draggable
                defaultPosition={{x: 10, y: 10}}
            >
            <g>
                <circle cx="0" cy="0" r={this.state.r + 'px'}/>
            </g>
            </Draggable>
        );
    }
}

export default BlackCircle;