import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../App.js';

test('App should allow counter to update on click', () => {
  render(<App />);
  let button = screen.getByTestId('handleClick');
  fireEvent.click(button);
  let clicks = screen.getByTestId('clicks');
  expect(clicks).toHaveTextContent(1);
});
