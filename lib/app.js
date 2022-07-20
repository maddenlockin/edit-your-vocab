const express = require('express');
const wordsController = require('./controllers/words');
const app = express();

app.use(express.json());

app.use('/api/v1/words', wordsController);

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
