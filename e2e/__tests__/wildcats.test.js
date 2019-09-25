const request = require('../request');
const db = require('../db');

describe('wildcats api', () => {
  beforeEach(() => {
    return db.dropCollection('wildcats');
  });

  const jaguar = {
    name: 'Jaguar',
    size: 'Large',
    weight: 165,
    coloring: ['spots', 'brown', 'yellow'],
    details: {
      friendly: false,
      funFact: 'Jaguars have no defined breeding season and will mate any time of year.'
    }
  };

  function postWildcat(obj) {
    return request
      .post('/api/wildcats')
      .send(obj)
      .expect(200)
      .then(({ body }) => body);
  }

  it('posts an object to database', () => {
    return postWildcat(jaguar)
      .then(result => {
        expect(result).toEqual({
          _id: expect.any(String),
          __v: 0,
          ...jaguar
        });
      });
  });

  it('gets a wildcat by id', () => {
    return postWildcat(jaguar)
      .then(result => {
        return request.get(`/api/wildcats/${result._id}`)
          .expect(200)
          .then(({ body }) => {
            expect(body).toEqual(result);
          });
      });
  });
});