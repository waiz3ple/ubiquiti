import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header component', () => {
  test('renders default Username correctly', () => {
    render( <Header/>, {wrapper: MemoryRouter}
    );
    const defaultUserNameElement = screen.getByText(/author\/Developer Name/i);
    expect(defaultUserNameElement).toBeInTheDocument();
  });

  test('displays the user name correctly', () => {
    render( <Header user={'John Smith'} />, {wrapper: MemoryRouter});

    const userNameElement = screen.getByText(/author\/john smith/i);
    expect(userNameElement).toBeInTheDocument();
  });

  test('Device is visible', () => {
    render(<Header/>, {wrapper: MemoryRouter});
    const deviceElement = screen.getByRole('heading', { name: /devices/i });
    expect(deviceElement).toBeInTheDocument();
  });

});

export { };

