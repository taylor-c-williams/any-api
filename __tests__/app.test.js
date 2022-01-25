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

  it('fetches a cat by her ID', async () => {
    const cat = await Cat.insert({ breed: 'Maine Coon', origin: 'Maine' });

    const res = await request(app).get(`/api/v1/cats/${cat.id}`);

    expect(res.body).toEqual(cat);
  });

  it('fetches all cats', async () => {
    const cat1 = await Cat.insert({ breed: 'Maine Coon', origin: 'Maine' });

    const cat2 = await Cat.insert({ breed: 'Norwegian Forest Cat', origin: 'Norway' });

    const res = await request(app).get('/api/v1/cats');

    expect(res.body).toEqual([cat1, cat2]);
  });

  it('updates a single cat by her ID', async () => {
    const cat1 = await Cat.insert({ breed: 'Maine Coon', origin: 'Maine' });

    const res = await request(app)
      .patch(`/api/v1/cats/${cat1.id}`)
      .send({ origin: 'United States' });

    expect(res.body).toEqual({ ...cat1, origin: 'United States' });
  });

  it('deletes a cat by ID', async () => {
    const cat = await Cat.insert({ breed: 'Maine Coon', origin: 'Maine' });
    const res = await request(app).delete(`/api/v1/cats/${cat.id}`);

    expect(res.body).toEqual(cat);
    expect(await Cat.getById(cat.id)).toBeNull();
  });

});
