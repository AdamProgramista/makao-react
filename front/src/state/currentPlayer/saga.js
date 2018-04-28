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
  console.log(action);
  const { payload } = action;
  try {
    const user = yield call(logIn, payload.name);
    yield put(logInSuccess(user));
  }
  catch (error) {
    console.log(error);
    yield put(logInFailure(`User wasn't add`));
  }
};
