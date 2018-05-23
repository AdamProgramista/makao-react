import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import './style.css';
import Card from './card';
import { putCard } from '../../../state/game';

class OwnPlayer extends PureComponent {

  render() {
    const { name, cards, onPutCard, id, activePlayer } = this.props;
    console.log(id, activePlayer);
    return (
      <div className='game__playground__ownplayer'>
        <div className={classNames('game__playground__ownplayer__name',
          { 'game__playground__ownplayer__name__active': id === activePlayer })}>
          {name}
        </div>
        <div className='game__playground__ownplayer__cards'>
          {cards.map((card, index) => (
            <Card
              key={index}
              color={card.color}
              figure={card.figure}
              onClick={() => onPutCard(card)} />
          ))}
        </div>
      </div >
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.currentPlayer.name,
  cards: state.game.playerCards,
  id: state.currentPlayer.id,
  activePlayer: state.game.activePlayer
});

const mapDispatchToProps = {
  onPutCard: putCard
};

export default connect(mapStateToProps, mapDispatchToProps)(OwnPlayer);
