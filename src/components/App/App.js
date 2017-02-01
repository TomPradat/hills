import React, { Component } from 'react';
import Svg from './../Svg/Svg';
import Factory from './../Factory/Factory';
import FormContainer from './../FormContainer/FormContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="side-menu">
          <FormContainer />
          <Factory />
        </div>
        <Svg />
      </div>
    );
  }
}

export default App;
