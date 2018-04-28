import { combineReducers } from 'redux';
import { gameReducer } from './game';
import { currentPlayerReducer } from './currentPlayer';

export const rootReducer = combineReducers(
  {
    game: gameReducer,
    currentPlayer: currentPlayerReducer
  }
);
