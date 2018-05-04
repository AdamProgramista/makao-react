import { delay } from 'redux-saga';
import { takeEvery, takeLatest, put, call } from 'redux-saga/effects';
import {
  JOIN_PLAYER,
  JOIN_PLAYER_SUCCESS,
  FETCH_GAME_DETAILS,
  fetchGameDetails,
  fetchGameDetailsSuccess,
  fetchGameDetailsFailure,
  joinPlayerSuccess,
  joinPlayerFailure
} from './index.js';
import { joinPlayerToGame, fetchDetailsOfGame } from '../../api/game.js';

export default function* () {
  yield takeEvery(JOIN_PLAYER, onJoinPlayer);
  yield takeLatest(JOIN_PLAYER_SUCCESS, onGetGameDetails);
  yield takeLatest(FETCH_GAME_DETAILS, onFetchGameDetails);
};

function* onJoinPlayer(action) {
  const { payload } = action;
  try {
    yield call(joinPlayerToGame, payload);
    yield put(joinPlayerSuccess());
  }
  catch (error) {
    yield put(joinPlayerFailure('Player wasn\'t added to game'));
  }
};

function* onGetGameDetails() {
  while (true) {
    yield put(fetchGameDetails());
    yield delay(1000);
  }
};

function* onFetchGameDetails() {
  try {
    const gameDetails = yield call(fetchDetailsOfGame);
    yield put(fetchGameDetailsSuccess(gameDetails));
  }
  catch (error) {
    yield put(fetchGameDetailsFailure('Game details wasn\'t fetched'));
  }
};
