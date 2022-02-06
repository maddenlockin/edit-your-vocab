const express = require('express');
const wordController = require('./controllers/word');
const app = express();

app.use(express.json());

app.use('/api/v1/words', wordController);

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
