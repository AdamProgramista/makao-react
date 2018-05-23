import React, { PureComponent } from 'react';
import './style.css';

class OpponentPlayer extends PureComponent {
  render() {
    const { name, cardsCount } = this.props;
    return (
      <div className='game__playground__opponentplayer'>
        <div className='game__playground__opponentplayer__name'>
          {name}
        </div>
        <div className='game__playground__opponentplayer__card'>
          {cardsCount}
        </div>
      </div>
    );
  }
}

export default OpponentPlayer;
