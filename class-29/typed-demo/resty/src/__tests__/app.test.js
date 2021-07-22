import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App.js';

const testUrl = 'https://pokeapi.co/api/v2/pokemon/';

const server = setupServer(
  rest.get(testUrl, (req, res, ctx) => {
    return res(ctx.json({ results: [{name: "test"}] }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('testing the App component', () => {
  test('App should make a request when the response is updated', async () => {
    render(<App />); // render the App component

    let input = screen.getByTestId('url');
    let getButton = screen.getByTestId('get');

    fireEvent.change(input, {target: {value: testUrl}});
    fireEvent.click(getButton);

    let results = await waitFor(() => screen.getByTestId('results'));

    expect(results).toHaveTextContent('test');
  });
});
