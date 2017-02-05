import React, {Component} from 'react';
import CircleForm from './../Circle/CircleForm';
import NodeForm from './../Node/NodeForm';
import RectangleForm from './../Rectangle/RectangleForm'; 
import IrectangleForm from './../iRectangle/IrectangleForm'; 

class Form extends Component {
    handleSubmit (selectedElement, values){
        this.props.handleSubmit(selectedElement.type, selectedElement.id, values);
    }
    handleForm(selectedElement) {
        if (!selectedElement) {
            return 'No element selected';
        }

        switch(selectedElement.type) {
            case 'circle' :
            return <CircleForm initialValues={selectedElement.values} onSubmit={this.handleSubmit.bind(this, selectedElement)}/>;

            case 'node' :
            return <NodeForm initialValues={selectedElement.values} onSubmit={this.handleSubmit.bind(this, selectedElement)}/>

            case 'rectangle' :
            return <RectangleForm initialValues={selectedElement.values} onSubmit={this.handleSubmit.bind(this, selectedElement)}/>

            case 'irectangle' :
            return <IrectangleForm initialValues={selectedElement.values} onSubmit={this.handleSubmit.bind(this, selectedElement)}/>

            default:
            return new Error('Unknow element type :' + selectedElement.type);
        }
    }
    render() {
        return (
            <div id="form-container">
                {this.handleForm(this.props.selectedElement)}
            </div>
        );
    }
}

export default Form;