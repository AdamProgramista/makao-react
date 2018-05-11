import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './style.css';
import OwnPlayer from './ownPlayer';
import StartGame from './startGame';
import OpponentPlayer from './opponentPlayer';
import Table from './table'

class GamePlayground extends PureComponent {
  render() {
    const { players, status } = this.props;
    return (
      <div className='game__playground'>
        <Table />
        <div className='game__playground__view'>
          {players.map(player => (
            <OpponentPlayer name={player.name}/>
          ))}
        </div>
        {(status === "waiting") && (
          <StartGame/>
        )}
        <OwnPlayer />
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

export default connect(mapStateToProps, mapDispatchToProps)(GamePlayground);
