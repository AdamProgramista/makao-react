import React, { Component } from 'react';
import './Table.css';

const PLAYERS_COUNT = 5;
const STEP = 360 / PLAYERS_COUNT;

class Table extends Component {
  render() {
    return (
      <div style={{ position: 'relative' }} className='game__playground__table'>
        <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
          {Array.from({ length: PLAYERS_COUNT }, (_, index) => {
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
              }} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Table;
