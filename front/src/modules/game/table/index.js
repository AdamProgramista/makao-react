import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './style.css';
import OpponentPlayer from '../opponent-player';
import { FaUser } from 'react-icons/lib/fa';

class Table extends PureComponent {

  render() {
    const { players } = this.props;
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
                  <div>
                    <div key={index} className='game__playground__table__opponent' style={{
                      left: Math.floor(x * 110) + 50 + '%',
                      top: Math.floor(y * 110) + 50 + '%',
                      transform: `translate(-50%, -50%) rotate(${degrees-90}deg)`
                    }}>
                      <FaUser />
                      <OpponentPlayer name={players[index].name} cardsCount={players[index].cardsCount}/>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.game.players
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
