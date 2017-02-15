import React, {Component} from 'react';
import CircleForm from './../Circle/CircleForm';
import NodeForm from './../Node/NodeForm';
import RectangleForm from './../Rectangle/RectangleForm'; 
import IrectangleForm from './../iRectangle/IrectangleForm'; 
import TextForm from './../Text/TextForm';

class Form extends Component {
    handleSubmit (values){
        const {updateElement, selectedElement} = this.props;
        updateElement(Object.assign({}, selectedElement, values));
    }
    handleForm(selectedElement) {
        if (!selectedElement) {
            return 'No element selected';
        }

        switch(selectedElement.type) {
            case 'circle' :
            return <CircleForm initialValues={selectedElement} onSubmit={this.handleSubmit.bind(this)}/>;

            case 'node' :
            return <NodeForm initialValues={selectedElement} onSubmit={this.handleSubmit.bind(this)}/>

            case 'rectangle' :
            return <RectangleForm initialValues={selectedElement} onSubmit={this.handleSubmit.bind(this)}/>

            case 'irectangle' :
            return <IrectangleForm initialValues={selectedElement} onSubmit={this.handleSubmit.bind(this)}/>

            case 'text' :
            return <TextForm initialValues={selectedElement} onSubmit={this.handleSubmit.bind(this)}/>

            default:
            return new Error('Unknow element type :' + selectedElement.type);
        }
    }
    render() {
        const {selectedElement} = this.props;
        return (
            <div id="form-container">
                {this.handleForm(selectedElement)}
            </div>
        );
    }
}

export default Form;