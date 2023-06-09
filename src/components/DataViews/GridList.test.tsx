/* import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import GridList from './GridList';

const mockStore = configureStore([]);

describe('GridList', () => {
  it('renders loading indicator when loading', () => {
    const store = mockStore({
      devices: {
        loading: true,
        data: [],
        error: null,
      },
      search: {
        value: '',
      },
      updated: [],
    });

    render(
      <Provider store={store}>
        <GridList />
      </Provider>
    );

    expect(screen.getByLabelText('loading')).toBeInTheDocument();
  });

  it('renders error message when there is an error', () => {
    const store = mockStore({
      devices: {
        loading: false,
        data: [],
        error: 'Failed to fetch devices',
      },
      search: {
        value: '',
      },
      updated: [],
    });

    render(
      <Provider store={store}>
        <GridList />
      </Provider>
    );

    expect(screen.getByText('Failed to fetch devices')).toBeInTheDocument();
  });

  it('renders grid layout with correct number of cards', () => {
    const devices = [
      {
        id: 1,
        product: { name: 'Device 1' },
        line: { name: 'Line 1' },
        icon: { id: 1 },
      },
      {
        id: 2,
        product: { name: 'Device 2' },
        line: { name: 'Line 2' },
        icon: { id: 2 },
      },
    ];

    const store = mockStore({
      devices: {
        loading: false,
        data: devices,
        error: null,
      },
      search: {
        value: '',
      },
      updated: devices,
    });

    render(
      <Provider store={store}>
        <GridList />
      </Provider>
    );

    const cards = screen.getAllByTestId('card');
    expect(cards).toHaveLength(2);

    const productName1 = screen.getByText('Device 1');
    expect(productName1).toBeInTheDocument();

    const productName2 = screen.getByText('Device 2');
    expect(productName2).toBeInTheDocument();
  });
}); */
export { };

