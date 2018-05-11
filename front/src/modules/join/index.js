import React, { PureComponent } from 'react';
import './style.css';
import { connect } from 'react-redux';
import Button from '../../components/button';
import { joinPlayer } from '../../state/game/index';

class Join extends PureComponent {

    onJoinPlayer = () => {
      this.props.onJoinPlayer();
    }

  render() {
    return (
      <div className='join-page'>
        <div className='join-page__header'>
          <h1>MAKAO-REACT</h1>
        </div>
        <div className='join-page__form'>
          <Button text='JOIN' onClick={this.onJoinPlayer}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    
});

const mapDispatchToProps = (dispatch) => ({
  onJoinPlayer: () => dispatch(joinPlayer())
});

export default connect(mapStateToProps, mapDispatchToProps)(Join);
