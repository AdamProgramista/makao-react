import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { pullCard } from '../../../../state/game';
import './style.css';

class Deck extends PureComponent {

  render() {
    const { onPullCard } = this.props;
    return (
      <div >
        <div className="deck" color="Pull card" onClick={onPullCard}>
          Pull card
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
  onPullCard: pullCard
};

export default connect(mapStateToProps, mapDispatchToProps)(Deck);
