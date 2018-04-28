import { delay } from 'redux-saga';
import { takeEvery, takeLatest, put, call } from 'redux-saga/effects';
import {
  JOIN_PLAYER,
  JOIN_PLAYER_SUCCESS,
  FETCH_GAME_DETAILS,
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
  const { gameId } = action;
  try {
    yield call(joinPlayerToGame, gameId);
    yield put(joinPlayerSuccess());
  }
  catch {
    yield put(joinPlayerFailure(`Player wasn't add to game`));
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
  catch {
    yield put(fetchGameDetailsFailure(`Game details wasn't fetched`));
  }
};
