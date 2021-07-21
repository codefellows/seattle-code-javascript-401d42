import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App.js';

const server = setupServer(
  rest.get('https://pokeapi.co/api/v2/pokemon/', (req, res, ctx) => {
    return res(ctx.json({ results: [{name: "test"}] }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Testing API effect', () => {
  test('app should fetch', async () => {  
    render(<App />);
  
    let list = await waitFor(() => screen.getByTestId('test'));
    expect(list).toHaveTextContent('test');
  });
});
