import { get, post, toJSON } from '../utils/request.js';

export const logIn = (name) => post(
  'http://localhost:8080/user/new',
  { name }
).then(toJSON);

export const getSessionUser = () => get(
  'http://localhost:8080/user/me'
).then(toJSON);
