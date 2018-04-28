import { takeEvery, put, call } from 'redux-saga/effects';
import {
  LOG_IN,
  logInSuccess,
  logInFailure,
} from './index.js';
import {logIn} from '../../api/currentPlayer';

export default function* () {
  yield takeEvery(LOG_IN, onlogIn);
};

function* onlogIn(action) {
  const { userName } = action;
  try {
    const userDetails = yield call(logIn, userName);
    yield put(logInSuccess(userDetails));
  }
  catch {
    yield put(logInFailure(`User wasn't add`));
  }
};
