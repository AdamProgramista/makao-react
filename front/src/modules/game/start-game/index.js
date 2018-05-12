import React, { PureComponent } from 'react';
import './style.css';
import { connect } from 'react-redux';
import Button from '../../../components/button';


class StartGame extends PureComponent {
  
  onStartGame = () => {
    this.props.startGame();
  }

  render() {
    return (
      <div className='start-game__form'>
      <Button text='START GAME'  />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  // startGame: () => dispatch(startGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(StartGame);