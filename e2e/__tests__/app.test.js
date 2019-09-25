const request = require('../request');

describe('core app api', () => {
  it('test route works', () => {
    return request
      .get('/hello')
      .expect(200)
      .then(res => {
        expect(res.text).toBe('test route works');
      });
  });
  it('returns 404 error for non-api bad path', () => {
    return request
      .get('/fakepath')
      .expect(404)
      .expect('Content-Type', /text/);
  });
  it('returns application/json 404 on bad api path', () => {
    return request
      .get('/api/fakepath')
      .expect(404)
      .expect('Content-Type', /json/)
      .then(res => {
        expect(res.body.error).toMatch(/not found/i);
      });
  });
});