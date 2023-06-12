import { screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { render } from '../test.util';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('Shows searchBar properly', () => {
    render(<SearchBar />);
    const searchField = screen.getByRole('searchbox');
    expect(searchField).toBeInTheDocument();
    //expect(searchField).toHaveAttribute('placeholder', 'Search');
  });

  it('Searchbar is focus on', async () => {
    user.setup();
     render(<SearchBar />);
    const searchBar = screen.getByRole('searchbox');
    // User focuses on the search bar
    await user.click(searchBar);
    expect(searchBar).toHaveFocus();
  });


});
export { };

