import { render } from '@testing-library/react';
import { MyHeader } from './MyHeader';
 
describe('MyHeader', () => {
  test('renders App component', () => {
    render(<MyHeader />);
  });
});
