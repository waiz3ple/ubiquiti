import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
//import { render } from '../../test.util';
import Home from './Home';

describe('Home component', () => {
  
  test('should render Header component', async () => {
    render(<Home />);
    const cards = await screen.findAllByRole('img');
    expect(cards).toBeInTheDocument();
  });

});
export { };

