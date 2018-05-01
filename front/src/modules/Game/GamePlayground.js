import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './Game.css';
import OwnPlayer from './OwnPlayer/OwnPlayer';
import OpponentPlayer from './OpponentPlayer/OpponentPlayer';
import Table from './Table/Table'

class GamePlayground extends PureComponent {
  render() {
    const { players } = this.props;
    return (
      <div className='game__playground'>
        <Table />
        <div className='game__playground__view'>
          {players.map(player => (
            <OpponentPlayer name={player.name}/>
          ))}
        </div>
        <OwnPlayer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.game.players
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(GamePlayground);
