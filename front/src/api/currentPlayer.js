import { post, toJSON } from '../utils/request.js';

export const logIn = (name) => post(
    'http://localhost:8080/user/new',
    {name}
).then(toJSON);
