import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home component', () => {
/*   it('should render loading state initially', () => {
    render(<Home />);
    const loadingSpinner = screen.getByTestId('loading-spinner');
    expect(loadingSpinner).toBeInTheDocument();
  }); */

/*   it('should update loading state after window load event', () => {
    render(<Home />);
    fireEvent.load(window);
    const loadingSpinner = screen.queryByTestId('loading-spinner');
    expect(loadingSpinner).not.toBeInTheDocument();
  }); */

  it('should render Header component', () => {
    render(<Home />);
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });
  
 /*  it('should render icons', ()=>{
    render(<Home/>);
    const listIcon = container.querySelector('#root > main > div > div:nth-child(2) > div:nth-child(3) > a:nth-child(1) > svg')
  }) */
/* 
  it('should not render mobile-menu at wide screen', ()=>{
    // Set the desired screen size
     global.innerWidth = 700;
     global.dispatchEvent(new Event('resize'));

    const {container} = render(<Home/>);
    const mobileMenu = container.querySelector('.mobile-menu')
    expect(mobileMenu).not.toBeInTheDocument();
  })

  it('should render Toolbar components and have expected functionalities', () => {
    render(<Home />);
    // Test the rendering and functionality of search bar, mobile menu, navigation icons, and filter panel components
    // Use screen queries and fireEvent to interact with the components and assert expectations
  });

  it('should render View area and nested routes correctly', () => {
    render(<Home />);
    // Test the rendering and routing behavior of the View area and its nested routes
    // Use screen queries and react-router-dom testing utilities to navigate and assert expectations
  }); */
}); 
export { };

