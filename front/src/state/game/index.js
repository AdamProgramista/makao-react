import { handleActions, createAction } from 'redux-actions';

const initialState = {
  status: 'waiting',
  players: [],
  activePlayer: '',
  currentCard: '',
  cardStack: '',
  joining: false
};

export const JOIN_PLAYER = 'game: join-to-game';
export const JOIN_PLAYER_SUCCESS = 'game: join-to-game-success';
const JOIN_PLAYER_FAILURE = 'game: join-to-game-failure';
export const FETCH_GAME_DETAILS = 'game: fetch-game-details';
const FETCH_GAME_DETAILS_SUCCESS = 'game: fetch-game-details-success';
const FETCH_GAME_DETAILS_FAILURE = 'game: fetch-game-details-failure';
export const START_GAME = 'game: start-game';
const START_GAME_SUCCESS = 'game: start-game-success';
const START_GAME_FAILURE = 'game: start-game-failure';

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

  [FETCH_GAME_DETAILS_SUCCESS]: (state, {payload}) => ({
    ...state,
    players: payload.players,
    status: payload.status,
    activePlayer: payload.activePlayerId,
    cardStack: payload.cardStack
  })
 
}, initialState);

export const joinPlayerSuccess = createAction(JOIN_PLAYER_SUCCESS);
export const joinPlayerFailure = createAction(JOIN_PLAYER_FAILURE);
export const fetchGameDetails = createAction(FETCH_GAME_DETAILS);
export const fetchGameDetailsSuccess = createAction(
  FETCH_GAME_DETAILS_SUCCESS,
  gameDetails => gameDetails
);
export const fetchGameDetailsFailure = createAction(FETCH_GAME_DETAILS_FAILURE);
export const joinPlayer = createAction(
  JOIN_PLAYER,
  user => user
);

export const startGame = createAction(START_GAME);
export const startGameSuccess = createAction(START_GAME_SUCCESS);
export const startGameFailure = createAction(START_GAME_FAILURE);
