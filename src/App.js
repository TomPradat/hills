import React, { Component } from 'react';
import Svg from './Svg';
import CircleForm from './form/CircleForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      form: null,
      formData: {}
    }
  }
  displayForm() {
    const form = this.state.form;
    const data = this.state.formData;

    switch(form){
        case 'circle' :
        return <CircleForm data={data}/>

        default :
        return 'No form to display'
    }
  }
  handleForm(type, data) {
    this.setState({form: type, formData: data});
  }
  render() {
    return (
      <div className="App">
        <div id="form-container">
            {this.displayForm()}
        </div>
        <Svg handleForm={this.handleForm.bind(this)}/>
      </div>
    );
  }
}

export default App;
