import gameSaga from './game/saga.js';
import currentPlayerSaga from './current-player/saga.js';

export default function* () {
  yield* gameSaga();
  yield* currentPlayerSaga();
};
