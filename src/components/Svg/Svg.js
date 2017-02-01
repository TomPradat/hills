import React from 'react';
import './Svg.css';
import BlackCircle from './../BlackCircle/BlackCircle';
import Circle from './../Circle/Circle';
import Node from './../Node/Node';

const Svg = ({gelements}) => (

    <svg id="main-svg" width="600px" height="600px">
        <BlackCircle />
        {gelements.circles.map( (circle, i) => 
            <Circle key={i} r={circle.r}/>
        )}
        {gelements.nodes.map( (node,i) => 
            <Node key={i} dot={node.dot}/>
        )}
    </svg>
);

export default Svg;