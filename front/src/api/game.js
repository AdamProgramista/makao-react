import { post, toJSON } from '../utils/request.js';

export const joinPlayerToGame = () => post(
    'http://localhost:8080/game/join'
).then(toJSON);

export const fetchDetailsOfGame = () => fetch('http://localhost:8080/game/')
  .then(toJSON);
