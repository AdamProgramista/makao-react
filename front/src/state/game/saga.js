import { delay } from 'redux-saga';
import { takeEvery, takeLatest, put, call } from 'redux-saga/effects';
import {
  JOIN_PLAYER,
  JOIN_PLAYER_SUCCESS,
  FETCH_GAME_DETAILS,
  PUT_CARD,
  PULL_CARD,
  fetchGameDetails,
  fetchGameDetailsSuccess,
  fetchGameDetailsFailure,
  joinPlayerSuccess,
  joinPlayerFailure,
  pullCardSuccess,
  putCardSuccess
} from './index.js';
import * as gameApi from '../../api/game.js';

export default function* () {
  yield takeEvery(JOIN_PLAYER, onJoinPlayer);
  yield takeLatest(JOIN_PLAYER_SUCCESS, onGetGameDetails);
  yield takeLatest(FETCH_GAME_DETAILS, onFetchGameDetails);
  yield takeEvery(PUT_CARD, onPutCard);
  yield takeEvery(PULL_CARD, onPullCard);
};

function* onJoinPlayer(action) {
  const { payload } = action;
  try {
    yield call(gameApi.joinPlayerToGame, payload);
    yield put(joinPlayerSuccess());
  }
  catch (error) {
    yield put(joinPlayerFailure('Player wasn\'t added to game'));
  }
};

function* onGetGameDetails() {
  while (true) {
    yield put(fetchGameDetails());
    yield delay(50);
  }
};

function* onFetchGameDetails() {
  try {
    const gameDetails = yield call(gameApi.fetchDetailsOfGame);
    yield put(fetchGameDetailsSuccess(gameDetails));
  }
  catch (error) {
    yield put(fetchGameDetailsFailure('Game details wasn\'t fetched'));
  }
};

function* onPutCard(action) {
  const { payload } = action;
  try {
    const message = yield call(gameApi.putCard, payload);
    yield put(putCardSuccess(message));
  } catch (error){

  }
};

function* onPullCard(action) {
  try {
    yield call(gameApi.pullCard);
  } catch (error){

  }
};
