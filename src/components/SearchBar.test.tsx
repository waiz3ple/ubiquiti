import { screen } from '@testing-library/react';
import { render } from '../test.util';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('Shows searchBar properly', () => {
    render(<SearchBar />);
    const searchField = screen.getByRole('searchbox');
    expect(searchField).toBeInTheDocument();

    //expect(searchField).toHaveAttribute('placeholder', 'Search');
  });


});
export { };

