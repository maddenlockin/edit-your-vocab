const { Router } = require('express');
const Word = require('../models/Word');

module.exports = Router()
  .post('/create', async (req, res, next) => {
    try {
      const entry = await Word.create(req.body);
      res.send(entry);
    } catch (err) {
      next(err);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const allWords = await Word.getAllWords();
      res.json(allWords);
    } catch (err) {
      next(err);
    }
  })

  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const word = await Word.findById(id);
      res.send(word);
    } catch (err) {
      next(err);
    }
  })
;
