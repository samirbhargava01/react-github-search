import { render, fireEvent, cleanup } from '@testing-library/react';
import { Search } from './Search';
import '@testing-library/jest-dom/extend-expect';

describe('Search', () => {
  test('renders App component', () => {
    render(<Search />);
  });
});

describe('Should show error message when there is no value inside text box', ()=> {
  
  const { getByTestId } = render(<Search />); 
  fireEvent.click(getByTestId('trigger-search'))
  expect(getByTestId('validation-error')).toHaveTextContent(/^Field should not be empty$/)
});

