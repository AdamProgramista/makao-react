import {post, toJSON} from '../utils/request.js';

export const joinPlayerToGame = ({gameId}) => post(
    'http://localhost:8080/game/join',
    {gameId}
).then(toJSON);

export const fetchGameDetails = () => fetch('http://localhost:8080/game/details')
  .then(toJSON);
