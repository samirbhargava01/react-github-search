import { render, fireEvent } from '@testing-library/react';
import App from './App';
 
describe('App', () => {
  test('renders App component', () => {
    render(<App />);
  });

  test('list rendered', ()=> {
    const { getByTestId, queryByTestId } = render(<App />); 
    
      fireEvent.change(getByTestId('input-control'), {
        target: { value: 'a' },
      })
      fireEvent.click(getByTestId('trigger-search'))
      
      setTimeout(() => {
      expect(getByTestId('users-list')).toBeTruthy();
      }, 1500);
    
  })

});
