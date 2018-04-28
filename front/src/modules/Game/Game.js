import React, { Component } from 'react';
import './Game.css';
import GameInfo from './GameInfo';
import GamePlayground from './GamePlayground';

class Game extends Component {
  render() {
    return (
      <div className='game'>
        <GamePlayground />
        <GameInfo />
      </div>
    );
  }
}

export default Game;
