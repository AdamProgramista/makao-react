import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Game.css';
import GameInfo from './GameInfo';
import GamePlayground from './GamePlayground';

class Game extends Component {
  render() {
    return (
      <div className='game'>
        <GamePlayground />
        <GameInfo />
      </div>
    );
  }
}

const mapStateToProps = (dispatch) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
