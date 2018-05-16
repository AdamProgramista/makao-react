import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import StartGame from './start-game';
import './style.css';

class GameInfo extends PureComponent {
  render() {
    const { players, status } = this.props;
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
        {(status === "waiting") && (
          <StartGame />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.game.players,
  status: state.game.status
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(GameInfo);
