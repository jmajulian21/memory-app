import React, { Component } from 'react';
import Urls from './componentes/urls/Urls';
import Login from './componentes/login/login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Urls />
          <Login />
      </div>
    );
  }
}

export default App;
