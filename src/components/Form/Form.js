import React, {Component} from 'react';
import CircleForm from './../Circle/CircleForm';
import NodeForm from './../Node/NodeForm';

class Form extends Component {
    handleForm(selectedElement) {
        if (!selectedElement) {
            return 'No element selected';
        }

        switch(selectedElement.type) {
            case 'circle' :
            return <CircleForm initialValues={selectedElement.values} onSubmit={this.props.handleSubmit}/>;

            case 'node' :
            return <NodeForm initialValues={selectedElement.values} onSubmit={this.props.handleSubmit}/>

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