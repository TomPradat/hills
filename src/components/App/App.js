import React, { Component } from 'react';
import SvgContainer from './../Svg/SvgContainer';
import FactoryContainer from './../Factory/FactoryContainer';
import FormContainer from './../Form/FormContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="side-menu">
          <FormContainer />
          <FactoryContainer />
        </div>
        <SvgContainer />
      </div>
    );
  }
}

export default App;
