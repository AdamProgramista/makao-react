import React, { Component } from 'react';
import './Game.css';

const players = [
  { name: 'Monika' },
  { name: 'Adam' },
  { name: 'Mirek' },
  { name: 'Yuriy' }
];

class GameInfo extends Component {
  render() {
    return (
      <div className='game__info'>
        <div className='game__info__header'>
          <h3>Makao-react</h3>
        </div>
        <ul className='game__info__list'>
          {players.map(player => (
            <li>{player.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default GameInfo;
