import React, { Component } from 'react';
import Svg from './Svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="form-container">
            This is the form container
        </div>
        <Svg />
      </div>
    );
  }
}

export default App;
