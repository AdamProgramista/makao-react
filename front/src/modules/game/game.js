import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './style.css';
import GameInfo from './game-info';
import GamePlayground from './game-playground';

class Game extends PureComponent {
  render() {
    return (
      <div className='game'>
        <GamePlayground />
        <GameInfo />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
