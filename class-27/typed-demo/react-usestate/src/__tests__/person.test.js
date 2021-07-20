import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Person from '../components/Person.js';

test('Dispay person and age', () => {
  render(<Person age={10}/>);
  let age = screen.getByTestId('age');
  let name = screen.getByTestId('name');
  expect(age).toHaveTextContent('10');
  expect(name).toHaveTextContent('someone');
});
