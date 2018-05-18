import React, { PureComponent } from 'react';
import Card from '../../own-player/card';
import './style.css';

class StackCards extends PureComponent {

  render() {
    const { cardStack } = this.props;
    const lastCard = cardStack[cardStack.length - 1];
    return (
      <div >
        <Card
          color={lastCard.color}
          figure={lastCard.figure} />
      </div>
    );
  }
}

export default StackCards;
