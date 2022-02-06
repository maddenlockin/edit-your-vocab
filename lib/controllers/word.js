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
  });
