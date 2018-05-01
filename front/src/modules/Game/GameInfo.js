import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import './Game.css';

class GameInfo extends PureComponent {
  render() {
    const { players } = this.props;
    return (
      <div className='game__info'>
        <div className='game__info__header'>
          <h3>Makao-react</h3>
        </div>
        {players && (<ul className='game__info__list'>
          {players.map(player => (
            <li key={player.name}>{player.name}</li>
          ))}
        </ul>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.game.players
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(GameInfo);
