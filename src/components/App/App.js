import React, { Component } from 'react';
import ElementsList from './../../containers/ElementsList';
import FactoryContainer from './../../containers/FactoryContainer';
import FormContainer from './../FormContainer/FormContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="side-menu">
          <FormContainer />
          <FactoryContainer />
        </div>
        <ElementsList />
      </div>
    );
  }
}

export default App;
