const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const newWord = {
  word: 'word',
  aka: 'wo',
  definition: 'a word',
  alternatives: 'sentence'
};

describe('vocab-api routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('posts word to db', async () => {
    const res = await request(app)
      .post('/api/v1/words/create')
      .send(newWord);
    expect(res.body).toEqual({
      id: expect.any(String),
      ...newWord,
    });
  });

  it('gets all words', async () => {
    return request(app)
      .get('/api/v1/words')
      .then((res) => {
        expect(res.body).toEqual(expect.any(Array));
      });
  });

  xit('gets a word by id', async () => {
    return request(app)
      .get('/api/v1/words/1')
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          word: 'dumb',
          aka: null,
          definition: 'unable to speak',
          reason: 'deaf and dumb',
          origin: '',
          alternatives: '',
        });
      });
  });

  afterAll(() => {
    pool.end();
  });
});
