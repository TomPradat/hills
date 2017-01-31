import React, { Component } from 'react';
import './Svg.css';
import BlackCircle from './config/BlackCircle';
import Circle from './config/Circle';
import Node from './Node';

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
                <BlackCircle />
                <Circle handleForm={this.props.handleForm.bind(this)}/>
                <Node dot="right"/>
            </svg>
        );
    }
}

export default Svg;