import {handleActions, createAction, handleAction} from 'redux-actions';

const initialState = {};

export const LOG_IN = 'current player: log-in';
export const LOG_IN_SUCCESS = 'current player: log-in-success';
export const LOG_IN_FAILURE = 'current player: log-inr-failure';

export const currentPlayerReducer = handleAction({
  
  [LOG_IN_SUCCESS]: (state, { userData }) => ({
    ...state,
    userName: userData.userName,
    userId: userData.userId
  }),
}, initialState);

export const addUser = createAction(
  LOG_IN,
  userName => userName
);

export const addUserSuccess = createAction(LOG_IN_SUCCESS);
export const addUserFailure = createAction(LOG_IN_FAILURE);
