/* import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import FilterPanel from './FilterPanel';
import { OpenPanel, clearActive, makeActiveOption } from '../redux/features/filters/Filter';
import { loadData } from '../redux/features/data/UpdatedData';

const mockStore = configureStore([]);

describe('FilterPanel component', () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      filter: [
        { option: 'Option 1', id: '1', isActive: false },
        { option: 'Option 2', id: '2', isActive: true },
      ],
      stable: [...], // your stable state value goes here
      panel: { isOpened: true },
      search: [...], // your search state value goes here
    });
  });

  test('renders without errors', () => {
    render(
      <Provider store={store}>
        <FilterPanel />
      </Provider>
    );
    // Add your assertion here to ensure that the component renders without any errors
  });

  test('dispatches OpenPanel action when close button is clicked', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <FilterPanel />
      </Provider>
    );
    const closeButton = getByRole('button');

    fireEvent.click(closeButton);

    expect(store.dispatch).toHaveBeenCalledWith(OpenPanel(false));
    expect(store.dispatch).toHaveBeenCalledWith(clearActive());
    expect(store.dispatch).toHaveBeenCalledWith(loadData(...)); // expected stable state value
  });

  test('dispatches makeActiveOption and loadData actions when filter option is clicked', () => {
    const { getByText } = render(
      <Provider store={store}>
        <FilterPanel />
      </Provider>
    );
    const filterOption = getByText('Option 1');

    fireEvent.click(filterOption);

    expect(store.dispatch).toHaveBeenCalledWith(makeActiveOption('1'));
    expect(store.dispatch).toHaveBeenCalledWith(loadData(...)); // expected filtered result value
  });
});
 */

export { };

