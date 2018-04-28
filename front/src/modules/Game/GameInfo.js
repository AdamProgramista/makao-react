import React, { Component } from 'react';
import './Game.css';



class GameInfo extends Component {
  // players = [{name: Monika}, {name: Adam}, {name: Mirek}, {name: Yuriy}]

  render() {
    return (
      <div className='game__info'>
        <div className='game__info__header'>
          <h3>Makao-react</h3>
        </div>
        <div className='game__info__list'>
          {/* <ul>
          {this.players.map(p => (
            <li>p.name</li>
          ))}
          </ul> */}
        </div>
      </div>
    );
  }
}

export default GameInfo;
