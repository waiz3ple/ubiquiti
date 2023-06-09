/* import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { fetchDevices } from '../../redux/features/data/Devices';
import { loadData, makeActive } from '../../redux/features/data/UpdatedData';
import { loadStableData } from '../../redux/features/data/UpdatedStableData';
import rootReducer from '../../redux/rootReducer';
import { includeActiveProp, processError } from '../Util';
import TableList from './TableList';

// Helper function to mock the Redux store
const renderWithRedux = (ui, { initialState, store = createStore(rootReducer, initialState) } = {}) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
};

describe('TableList', () => {
  // Mock the API response for device data
  const mockDevices = [
    { id: 1, product: { name: 'Device 1' }, line: { name: 'Product Line 1' }, icon: { id: 'icon1' } },
    { id: 2, product: { name: 'Device 2' }, line: { name: 'Product Line 2' }, icon: { id: 'icon2' } },
  ];

  // Mock the search value
  const mockSearchValue = 'Device';

  beforeEach(() => {
    // Mock the fetchDevices action
    fetchDevices.mockReturnValueOnce(async (dispatch) => {
      dispatch({ type: 'devices/fetchDevices/pending' });
      dispatch({ type: 'devices/fetchDevices/fulfilled', payload: mockDevices });
    });
  });

  it('renders loading indicator while fetching data', () => {
    renderWithRedux(<TableList />);
    
    expect(screen.getByTestId('loading-indicator')).toBeInTheDocument();
  });

  it('renders error message if API request fails', async () => {
    // Mock the fetchDevices action to simulate an error
    fetchDevices.mockReturnValueOnce(async (dispatch) => {
      dispatch({ type: 'devices/fetchDevices/pending' });
      dispatch({ type: 'devices/fetchDevices/rejected', error: { message: 'Error' } });
    });

    renderWithRedux(<TableList />);

    await waitFor(() => {
      expect(screen.getByText('It seems you hit a snag!')).toBeInTheDocument();
      expect(screen.getByText('Sorry, the page you are requesting is not available')).toBeInTheDocument();
      expect(screen.getByText('Go back home')).toBeInTheDocument();
    });
  });

  it('renders table with data and additional specifications', async () => {
    const initialState = {
      devices: {
        loading: false,
        data: mockDevices,
        error: null,
      },
      search: {
        value: mockSearchValue,
      },
      updated: [],
    };

    const { store } = renderWithRedux(<TableList />, { initialState });

    // Wait for the data to be loaded and the updated data to be populated
    await waitFor(() => {
      expect(store.getState().updated.length).toBeGreaterThan(0);
    });

    // Check if the table is rendered correctly
    expect(screen.getByRole('table')).toBeInTheDocument();

    // Check if the correct number of devices is displayed in the table header
    expect(screen.getByText('2 devices')).toBeInTheDocument();

    // Check if the correct device names are displayed in the table rows
    expect(screen.getByText('Device 1')).toBeInTheDocument();
    expect(screen.getByText('Device 2')).toBeInTheDocument();

    // Simulate clicking on a device row to activate it
    screen.getByText('Device 1').click();

    // Check if the additional specifications are displayed for the activated device
    expect(screen.getByText('Additional specifications')).toBeInTheDocument();
  });
}); */

export { };

