import { takeEvery, put, call } from 'redux-saga/effects';
import {
  LOG_IN,
  logInSuccess,
  logInFailure,
} from './index.js';
import { logIn } from '../../api/currentPlayer';

export default function* () {
  yield takeEvery(LOG_IN, onlogInToGame);
};

function* onlogInToGame(action) {
  const { payload } = action;
  try {
    const user = yield call(logIn, payload.name);
    yield put(logInSuccess(user));
  }
  catch (error) {
    yield put(logInFailure('User wasn\'t added to platform'));
  }
};
