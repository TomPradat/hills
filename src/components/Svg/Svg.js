import React, { Component } from 'react';
import './Svg.css';
import BlackCircle from './../BlackCircle/BlackCircle';
import Circle from './../Circle/Circle';
import Node from './../Node/Node';

const Svg = () => (
    <svg id="main-svg" width="600px" height="600px">
        <BlackCircle />
        <Circle />
        <Node dot="right"/>
    </svg>
);

export default Svg;