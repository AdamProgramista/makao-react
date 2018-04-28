import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Login from './modules/Login/Login';
import Game from './modules/Game/Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <Game />
      </div>
    );
  }
};

const mapStateToProps = (dispatch) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
