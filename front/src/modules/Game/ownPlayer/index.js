import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './style.css';
import Card from './Card/Card'

const cards = [1,2,3,4,5];

class OwnPlayer extends PureComponent {
  render() {
    const { name } = this.props;
    return (
      <div className='game__playground__ownplayer'>
        <div className='game__playground__ownplayer__name'>
          {name}
        </div>
        <div className='game__playground__ownplayer__cards'>
          {cards.map(card => (
            <Card key={card} color='Hearts' figure='2'/>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.currentPlayer.name
});

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(OwnPlayer);