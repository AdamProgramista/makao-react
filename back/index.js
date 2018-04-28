const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const { router } = require('./routing/index');
const app = express();

app.use(bodyParser.json());
app.use(session({ secret: 'makaolingus', cookie: { maxAge: 60000 } }));
app.use(router);

app.listen(8080, 'localhost', () => console.log('Shuffeling cards... get ready'));
