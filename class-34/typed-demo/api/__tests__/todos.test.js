'use strict';

const server = require('../lib/server.js');
const supertest = require('supertest');
const { db } = require('../lib/model/index.js');

// mock the reuest with supertest
const request = supertest(server.app) // this takes an instance of Express. => express();

beforeAll(async () => {
  await db.sync();
  await db.models.Todos.create({name: 'test'});
});
afterAll(async () => {
  await db.drop();
});

describe('Testing server CRUD for todos', () => {
  it ('Should be able to READ todos at /todos', async () => {
    // make an HTTP Request
    let response = await request.get('/todos');
    // hope that json is returned on the response 
    expect(response.body).toBeTruthy();
    // hope that a status of 200 is returned.
    expect(response.status).toBe(200);

    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body.length).toBe(1);
  });

  it ('Should be able to CREATE todos at /todos', async () => {

    let response = await request.post('/todos');

  });

  it('Should be able to UPDATE todos a /todos/:id', async () => {

    let response = await request.put(`/todos/`);

  });

  it('Should be able to DELEETE todos at /todos/:id', async () => {

    let response = await request.delete(`/todos/`);

  });

  it('Should register a user', async () => {
    let response = await request.post('/signup').send({
      username: 'Jacob',
      password: 'test'
    });

    expect(response.body.user.username).toEqual('Jacob');
  });

  it('Should be able to login a user', async () => {
    let response = await request.post('/signin').auth('Jacob', 'test');

    expect(response.body.user.username).toEqual('Jacob');
  });
});
