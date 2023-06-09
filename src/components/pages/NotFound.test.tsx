import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from './NotFound';

test('renders the NotFound component correctly', () => {
  render(<NotFound/>, {wrapper: MemoryRouter});

  // Assert that the error message is rendered
  const errorMessage = screen.getByText(/It seems you hit a snag!/i);
  expect(errorMessage).toBeInTheDocument();

  // Assert that the error detail is rendered
  const errorDetail = screen.getByText(/Sorry, the page you are requesting is not available/i);
  expect(errorDetail).toBeInTheDocument();

  // Assert that the link is rendered and has the correct title and URL
  const link = screen.getByText(/Go back home/i);
  expect(link).toBeInTheDocument();
  expect(link.getAttribute('href')).toBe('/ubiquiti');
});

export { };

