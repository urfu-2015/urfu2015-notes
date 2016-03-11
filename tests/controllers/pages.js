'use strict';

const supertest = require('supertest');
const app = require('../../app');

describe('GET /nonExistentPage', () => {
    it('should respond with 404', done => {
        supertest(app)
            .get('/nonExistentPage')
            .expect(404, 'Not Found')
            .end(done);
    });
});
