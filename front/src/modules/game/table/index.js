import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import StackCards from './stack-cards';
import Deck from './deck';
import './style.css';

class Table extends PureComponent {

  render() {
    const { players, cardStack } = this.props;
    const PLAYERS_COUNT = players.length;
    const STEP = 360 / PLAYERS_COUNT;

    return (
      <div className='game__playground__table' >
        {<div style={{ position: 'relative' }} className='game__playground__table' >
          <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
            {
              Array.from({ length: PLAYERS_COUNT }, (_, index) => {
                const degrees = index * STEP;
                const x = Math.cos(degrees * Math.PI / 180) / 2;
                const y = Math.sin(degrees * Math.PI / 180) / 2;
                return (
                  <div key={index} style={{
                    position: 'absolute',
                    width: 50,
                    height: 50,
                    left: Math.floor(x * 100) + 50 + '%',
                    top: Math.floor(y * 100) + 50 + '%',
                    backgroundColor: 'red',
                    borderRadius: '50%',
                    transform: 'translateX(-50%) translateY(-50%)'
                  }
                  } />
                );
              })
            }
          </div>
        </div>}
        {cardStack.length > 0 && (
          <StackCards cardStack={cardStack} />
        )}
        <Deck />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.game.players,
  cardStack: state.game.cardStack
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
