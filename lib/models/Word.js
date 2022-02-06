const pool = require('../utils/pool');

module.exports = class Word {
  id;
  word;
  aka;
  definition;
  reason;
  origin;
  alternatives;

  constructor(row) {
    this.id = row.id;
    this.word = row.word;
    this.aka = row.aka;
    this.definition = row.definition;
    this.reason = row.reason;
    this.origin = row.origin;
    this.alternatives = row.alternatives;
  }

  static async create({ word, aka, definition, reason, origin, alternatives }) {
    const { rows } = await pool.query(
      `INSERT INTO words (word, aka, definition, reason, origin, alternatives)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *`,
      [word, aka, definition, reason, origin, alternatives]
    );
    return new Word(rows[0]);
  }
};
