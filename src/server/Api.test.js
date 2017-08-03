/*global it, describe, expect */
import request from 'supertest-as-promised';
import Api from './Api';

const { app } = new Api();

describe('Api', () => {
  it('should responds with Hello World!', () => {
    return request(app).get('/')
      .expect(200)
      .then(res => {
        expect(typeof res.body.message).toBe('string');
        expect(res.body.message).toBe('Hello World!');
      });
  });
});
