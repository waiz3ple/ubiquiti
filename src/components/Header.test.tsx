import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe('Header component', () => {
   test('renders default Username correctly', () => {
    render(  <MemoryRouter>
                   <Header/>
            </MemoryRouter>);
     const defaultUserNameElement = screen.getByText(/author\/Developer Name/i);
     expect(defaultUserNameElement).toBeInTheDocument();
  });

  test('displays the user name correctly', () => {
    render(  <MemoryRouter>
                   <Header user={'John Smith'} />
            </MemoryRouter>);

    const userNameElement = screen.getByText(/author\/john smith/i);
    expect(userNameElement).toBeInTheDocument(); 
  });

  test('Device is visible', ()=>{
     render(  <MemoryRouter>
                   <Header />
            </MemoryRouter>);
    const deviceElement = screen.getByRole('heading', {  name: /devices/i });
    expect(deviceElement).toBeInTheDocument();
  })
  // //___________________________/*  

  // test('displays default user name when user prop is not provided', () => {
  //   const { getByText } = render(
  //     <MemoryRouter>
  //       <Header />
  //     </MemoryRouter>
  //   );
  //   const defaultUserNameElement = getByText(/Author\/Developer Name/i);
  //   // Add your assertion here to ensure that the default user name is displayed correctly
  // });

  // test('renders loading state when loading prop is true', () => {
  //   const { getByText } = render(
  //     <MemoryRouter>
  //       <Header user="John Doe" loading={true} />
  //     </MemoryRouter>
  //   );
  //   const loadingElement = getByText(/Loading/i);
  //   // Add your assertion here to ensure that the loading state is rendered correctly
  // });

  // test('renders error message when error prop is provided', () => {
  //   const { getByText } = render(
  //     <MemoryRouter>
  //       <Header user="John Doe" error="An error occurred" />
  //     </MemoryRouter>
  //   );
  //   const errorElement = getByText(/An error occurred/i);
  //   // Add your assertion here to ensure that the error message is displayed correctly
  // });

  // test('navigates to the correct route when logo is clicked', () => {
  //   // Mock the react-router-dom's Link component to test navigation
  //   jest.mock('react-router-dom', () => ({
  //     ...jest.requireActual('react-router-dom'),
  //     Link: ({ to, children }) => <a href={to}>{children}</a>,
  //   }));

  //   const { getByAltText } = render(
  //     <MemoryRouter>
  //       <Header user="John Doe" />
  //     </MemoryRouter>
  //   );
  //   const logoElement = getByAltText('Brand Logo');
  //   // Add your assertion here to ensure that the logo navigates to the correct route
  // });
  // //___________________________ */

});

export { };

