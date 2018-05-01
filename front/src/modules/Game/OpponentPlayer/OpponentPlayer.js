import React, { PureComponent } from 'react';
import './OpponentPlayer.css';

const name = 'Adam';
const cards = [1,2,3,4,5,6,7];

class OpponentPlayer extends PureComponent {
  render() {
    return (
      <div className='game__playground__opponentplayer'>
        <div className='game__playground__opponentplayer__name'>
          {name}
        </div>
        <div className='game__playground__opponentplayer__card'>
          {cards.length}
        </div>
      </div>
    );
  }
}

export default OpponentPlayer;