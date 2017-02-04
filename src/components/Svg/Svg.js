import React from 'react';
import './Svg.css';
import BlackCircle from './../BlackCircle/BlackCircle';
import Circle from './../Circle/Circle';
import Node from './../Node/Node';

const Svg = ({gelements, selectElement}) => (

    <svg id="main-svg" width="600px" height="600px">
        <BlackCircle />
        {gelements.circle.map( (circle) => 
            <Circle key={circle.id} r={circle.r} label={circle.label} selectElement={selectElement.bind(this, 'circle', circle.id)}/>
        )}
        {gelements.node.map( (node) => 
            <Node key={node.id} dot={node.dot} selectElement={selectElement.bind(this, 'node', node.id)} />
        )}
    </svg>
);

export default Svg;