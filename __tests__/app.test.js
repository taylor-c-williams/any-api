const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Cat = require('../lib/models/Cat');

describe('any-api routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  afterAll(() => {
    pool.end();
  });


  it('creates a cat entry', async () => {
    const res = await Cat.insert({ breed:'Norwegian Forest Cat', origin: 'Norway' });

    expect(res).toEqual({
      id: expect.any(String),
      breed:'Norwegian Forest Cat',
      origin: 'Norway'      
    });
  });

});
