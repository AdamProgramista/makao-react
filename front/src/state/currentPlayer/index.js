import { createAction, handleActions } from 'redux-actions';

const initialState = {
  userName: '',
  userId: ''
};

export const LOG_IN = 'current player: log-in';
export const LOG_IN_SUCCESS = 'current player: log-in-success';
export const LOG_IN_FAILURE = 'current player: log-in-failure';

export const currentPlayerReducer = handleActions({
  
  [LOG_IN_SUCCESS]: (state, { user }) => ({
    ...state,
    name: user.name,
    id: user.id
  }),
}, initialState);

export const logIn = createAction(
  LOG_IN,
  name => ({ name })
);

export const logInSuccess = createAction(
  LOG_IN_SUCCESS,
  user => user
);
export const logInFailure = createAction(LOG_IN_FAILURE);
