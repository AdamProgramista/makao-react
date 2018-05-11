import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Login from './modules/login';
import Game from './modules/game/game';
import Join from './modules/join';

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
