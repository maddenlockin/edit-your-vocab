const pool = require('../utils/pool');

module.exports = class Word {
  id;
  word;
  aka;
  definition;
  alternatives;

  constructor(row) {
    this.id = row.id;
    this.word = row.word;
    this.aka = row.aka;
    this.definition = row.definition;
    this.alternatives = row.alternatives;
  }

  static async create({ word, aka, definition, alternatives }) {
    const { rows } = await pool.query(
      `INSERT INTO words (word, aka, definition, alternatives)
      VALUES ($1, $2, $3, $4)
      RETURNING *`,
      [word, aka, definition, alternatives]
    );
    return new Word(rows[0]);
  }

  static async getAllWords() {
    const { rows } = await pool.query('SELECT * FROM words');
    return rows.map((row) => new Word(row));
  }

  static async findById(id) {
    const { rows } = await pool.query(
      `SELECT *
      FROM words
      WHERE id = $1`,
      [id]
    );
    return new Word({ ...rows[0] });
  }

  static async sortA() {
    const { rows } = await pool.query(
      `SELECT * FROM words
      ORDER BY word DESC`);
    return rows.map((row) => new Word(row));
  }

  static async sortZ() {
    const { rows } = await pool.query(`
    SELECT * FROM words
    ORDER BY word ASC`);
    return rows.map((row) => new Word(row));
  }
};
