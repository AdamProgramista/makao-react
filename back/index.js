const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const { router } = require('./routing/index');
const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(bodyParser.json());
app.use(session({ secret: 'makaolingus' }));
app.use(router);

app.listen(8080, 'localhost', () => console.log('Shuffeling cards... get ready'));
