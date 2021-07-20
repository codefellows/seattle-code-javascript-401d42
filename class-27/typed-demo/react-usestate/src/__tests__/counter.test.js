import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from '../components/Counter.js';

describe('testing the counter component', () => {

  test('render the amount of times a button was clicked', () => {
    render(<Counter number={10} />);
    const timesClicked = screen.getByTestId('clicks');
    expect(timesClicked).toHaveTextContent(10);
  }); 
});
