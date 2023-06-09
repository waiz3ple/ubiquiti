/* import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SearchBar from './SearchBar';
import { clearActive, clearSearch, deviceSearch } from '../redux/features/search/Search';
import { Store, AnyAction } from '@reduxjs/toolkit';

const mockStore = configureStore([]);

describe('SearchBar component', () => {
  let store: Store<unknown, AnyAction>;
  beforeEach(() => {
    store = mockStore({});
  });

  test('renders without errors', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    // Add your assertion here to ensure that the component renders without any errors
  });

  test('dispatches deviceSearch action when input value changes', () => {
    const { getByLabelText, getByPlaceholderText } = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const inputElement = getByPlaceholderText('Search');

    fireEvent.change(inputElement, { target: { value: 'example search' } });

    expect(store.dispatch).toHaveBeenCalledWith(deviceSearch('example search'));
  });

  test('dispatches clearSearch and clearActive actions when clear search button is clicked', () => {
    const { getByLabelText, getByTestId } = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    const clearButton = getByTestId('clear-search-button');

    fireEvent.click(clearButton);

    expect(store.dispatch).toHaveBeenCalledWith(clearSearch());
    expect(store.dispatch).toHaveBeenCalledWith(clearActive());
  });
});
 */
import { render, screen } from "@testing-library/react";
import user from '@testing-library/user-event';
import { MemoryRouter } from "react-router-dom";
import SearchBar from "./SearchBar";

describe('SearchBar', ()=>{
  it('Shows searchBar properly ', ()=>{
    render(<SearchBar/>)
    const searchField = screen.getByRole('searchbox');
    expect(searchField).toBeInTheDocument();

    expect(searchField).toHaveAttribute('placeholder', 'Search')
  });

  test('Search is Focus', async () => {
  user.setup();
  const {container} = render(<SearchBar/>);
  screen.debug();
  const searchField = screen.getByRole('searchbox');
  const searchIcon = container.querySelector('#root > main > div > div:nth-child(2) > div:nth-child(1) > label > svg')!;
  const closeSearchIcon = container.querySelector('#root > main > div > div:nth-child(2) > div:nth-child(1) > div > svg');
  //initially
  expect(searchField).toHaveValue('');
   await user.click(searchIcon)
  // user just click on the search icon
  expect(searchField).toHaveFocus();
  
  //user types in search field cl
  await user.type(searchField, 'camera')
  expect(closeSearchIcon).toBeInTheDocument();

});

})
export { };

