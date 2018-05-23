import { post, toJSON, get } from '../utils/request.js';

export const joinPlayerToGame = () => post(
  'http://localhost:8080/game/join'
).then(toJSON);

export const fetchDetailsOfGame = () => fetch('http://localhost:8080/game/',
  { 'credentials': 'include' }
).then(toJSON);

export const putCard = (card) => post(
  'http://localhost:8080/game/put-card',
  { card }
).then(toJSON);

export const pullCard = () => post(
  'http://localhost:8080/game/pull-card'
).then(toJSON);
