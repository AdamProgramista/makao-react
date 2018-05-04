import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Login from './modules/Login/Login';
import Game from './modules/Game/Game';
import Join from './modules/Join/Join';

class App extends PureComponent {
  render() {
    const { user, players } = this.props;
    return (
      <div className="App">
        {!user.name && (<Login />)}
        {(user.name && players.length === 0) &&(<Join user={user}/>)}
        {players.length > 0 && (<Game/>)}
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  user: state.currentPlayer,
  players: state.game.players
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
