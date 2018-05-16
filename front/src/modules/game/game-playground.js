import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './style.css';
import OwnPlayer from './own-player';
import OpponentPlayer from './opponent-player';
import Table from './table'

class GamePlayground extends PureComponent {
  render() {
    const { players } = this.props;
    return (
      <div className='game__playground'>
        <Table />
        {/* <div className='game__playground__view'>
        </div> */}
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
