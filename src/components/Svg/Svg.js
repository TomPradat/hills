import React, { Component } from 'react';
import './Svg.css';
import BlackCircle from './../BlackCircle/BlackCircle';
import Circle from './../Circle/Circle';
import Node from './../Node/Node';
import Rectangle from './../Rectangle/Rectangle';
import Irectangle from './../iRectangle/Irectangle';


class Svg extends Component {
    isSelected(type, id) {
        const {selectedElement} = this.props;

        if (type === selectedElement.type & id === selectedElement.id) {
            return true;
        }

        return false;
    }
    render() {
        const {gelements, selectElement} = this.props;
        return (
            <svg id="main-svg" width="600px" height="600px">
                <BlackCircle />
                {gelements.circle.map( (circle) =>
                    <Circle key={circle.id} values={circle} selectElement={selectElement.bind(this, 'circle', circle.id)} isSelected={this.isSelected('circle', circle.id)}/>
                )}
                {gelements.node.map( (node) =>
                    <Node key={node.id} values={node} selectElement={selectElement.bind(this, 'node', node.id)} isSelected={this.isSelected('node', node.id)}/>
                )}
                {gelements.rectangle.map( (rectangle) =>
                    <Rectangle key={rectangle.id} values={rectangle} selectElement={selectElement.bind(this, 'rectangle', rectangle.id)} isSelected={this.isSelected('rectangle', rectangle.id)}/>
                )}
                {gelements.irectangle.map( (irectangle) =>
                    <Irectangle key={irectangle.id} values={irectangle} selectElement={selectElement.bind(this, 'irectangle', irectangle.id)} isSelected={this.isSelected('irectangle', irectangle.id)}/>
                )}
            </svg>
        );
    }
}

export default Svg;