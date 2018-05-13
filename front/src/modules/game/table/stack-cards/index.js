import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(StackCards);
