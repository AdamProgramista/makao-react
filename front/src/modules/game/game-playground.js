import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './style.css';
import Message from './message';
import OwnPlayer from './own-player';
import Table from './table';

class GamePlayground extends PureComponent {
  render() {
    const { players, status } = this.props;
    return (
      <div className='game__playground'>
        <Message />
        <Table />
        <OwnPlayer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.game.players,
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(GamePlayground);
