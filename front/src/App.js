import React, { Component } from 'react';
import './App.css';
import Login from './modules/Login/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Login /> */}
        <Game />
      </div>
    );
  }
}

export default App;
