import React, { Component } from 'react';
import './Svg.css';

class Svg extends Component {
    constructor() {
        super();
        this.state = {
            width: '600px',
            height: '600px'
        };
    }
    render() {
        return (
            <svg id="main-svg" width={this.state.width} height={this.state.height}>
            </svg>
        );
    }
}

export default Svg;