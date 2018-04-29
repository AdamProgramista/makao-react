import React, { Component } from 'react';
import './Game.css';
import OwnPlayer from './OwnPlayer/OwnPlayer';
import OpponentPlayer from './OpponentPlayer/OpponentPlayer';
import Table from './Table/Table'

const players = [{name: 'Monika'}, {name: 'Adam'}, {name: 'Mirek'}, {name: 'Yuriy'}]

class GamePlayground extends Component {
  render() {
    return (
      <div className='game__playground'>
        <Table />
        <div class='game__playground__view'>
          {players.map(player => (
            <OpponentPlayer />
          ))}
        </div>
        <OwnPlayer />
      </div>
    );
  }
}

export default GamePlayground;
