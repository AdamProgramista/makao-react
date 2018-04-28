import {post, toJSON} from '../utils/request.js';

export const joinPlayerToGame = ({gameId}) => post(
    'http://localhost:8080/game/join',
    {gameId}
).then(toJSON);

export const fetchDetailsOfGame = () => fetch('http://localhost:8080/game/details')
  .then(toJSON);
