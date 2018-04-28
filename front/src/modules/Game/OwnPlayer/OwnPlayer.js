import React, { Component } from 'react';
import './OwnPlayer.css';
import Card from './Card/Card'

const name = 'Adam';
const cards = [1,2,3,4,5];

class OwnPlayer extends Component {
  render() {
    return (
      <div className='game__playground__ownplayer'>
        <div className='game__playground__ownplayer__name'>
          {name}
        </div>
        <div className='game__playground__ownplayer__cards'>
          {cards.map(card => (
            <Card color='Hearts' figure='2'/>
          ))}
        </div>
      </div>
    );
  }
}

export default OwnPlayer;