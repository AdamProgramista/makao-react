import React, { PureComponent } from 'react';
import './style.css';
import GameInfo from './game-info';
import GamePlayground from './game-playground';

class Game extends PureComponent {
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
