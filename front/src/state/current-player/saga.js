import { takeEvery, takeLatest, put, call } from 'redux-saga/effects';
import {
  GET_SESSION_USER,
  LOG_IN,
  getSessionUser,
  logInFailure,
  logInSuccess
} from './index.js';
import * as userApi from '../../api/current-player';

export default function* () {
  yield takeEvery(LOG_IN, onlogInToGame);
  yield takeLatest(GET_SESSION_USER, onGetSessionUser);
  yield put(getSessionUser());
};

function* onlogInToGame(action) {
  const { payload } = action;
  try {
    const user = yield call(userApi.logIn, payload.name);
    yield put(logInSuccess(user));
  } catch (error) {
    yield put(logInFailure('User wasn\'t added to platform'));
  }
};

function* onGetSessionUser(action) {
  try {
    const user = yield call(userApi.getSessionUser);
    yield put(logInSuccess(user));
  } catch (error) {

  }
};
