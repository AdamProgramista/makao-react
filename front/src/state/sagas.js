import gameSaga from './game/saga.js';
import currentPlayerSaga from './currentPlayer/saga.js';

export default function* () {
  yield* gameSaga();
  yield* currentPlayerSaga();
};
