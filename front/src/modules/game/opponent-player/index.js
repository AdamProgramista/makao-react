import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './style.css';

const cards = [1,2,3,4,5,6,7];

class OpponentPlayer extends PureComponent {
  render() {
    const { name, cardsCount } = this.props;
    return (
      <div className='game__playground__opponentplayer'>
        <div className='game__playground__opponentplayer__name'>
          {name}
        </div>
        <div className='game__playground__opponentplayer__card'>
          {cardsCount}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(OpponentPlayer);