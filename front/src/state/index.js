import { combineReducers } from 'redux';
import { gameReducer } from './game';
import { currentPlayerReducer } from './current-player';

export const rootReducer = combineReducers({
  game: gameReducer,
  currentPlayer: currentPlayerReducer
});
