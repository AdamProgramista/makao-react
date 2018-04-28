import { handleActions, createAction } from 'redux-actions';

const initialState = {
  status: 'waiting',
  players: [],
  activePlayer: '',
  currentCard: '',
  deckCards: '',
  joining: false
};

export const JOIN_PLAYER = 'join-player-to-game';
export const JOIN_PLAYER_SUCCESS = 'join-player-to-game-success';
const JOIN_PLAYER_FAILURE = 'join-player-to-game-failure';
const START_GAME = 'start-game';
const START_GAME_SUCCESS = 'start-game-success';
export const FETCH_GAME_DETAILS = 'fetch-game-details';
const FETCH_GAME_DETAILS_SUCCESS = 'fetch-game-details-success';
const FETCH_GAME_DETAILS_FAILURE = 'fetch-game-details-failure';

export const gameReducer = handleActions({

  [JOIN_PLAYER]: (state, { gameId }) => ({
    ...state,
    joining: true,
    gameId
  }),

  [JOIN_PLAYER_SUCCESS]: (state) => ({
    ...state,
    joining: false
  }),

  [FETCH_GAME_DETAILS_SUCCESS]: (state, {gameDetails}) => ({
    ...state,
    ...gameDetails
  })
 
}, initialState);

export const joinPlayerSuccess = createAction(JOIN_PLAYER_SUCCESS);
export const joinPlayerFailure = createActions(JOIN_PLAYER_FAILURE);
export const fetchGameDetails = createActions(FETCH_GAME_DETAILS);
export const fetchGameDetailsSuccess = createAction(
  FETCH_GAME_DETAILS_SUCCESS,
  gameDetails => gameDetails
);
export const joinPlayer = createAction(
  JOIN_PLAYER,
  gameId => gameId
);
