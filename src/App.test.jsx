import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'; // Import jest-dom for matchers

describe('App', () => {
  test('renders Navbar', () => {
    render(
        <App />
    );

    // Check for all nav link texts
    const navLinks = [
      'HOME',
      'MOVIES',
      'EVENTS',
      'SPORTS',
      'PAGES',
      'BLOGS',
      'CONTACT'
    ];

    navLinks.forEach(linkText => {
      const linkElement = screen.getByText(new RegExp(linkText, 'i'));
      expect(linkElement).toBeInTheDocument(); // This should work now
    });

    const joinUsButton = screen.getByRole('button', { name: /join us/i });
    expect(joinUsButton).toBeInTheDocument();
  });

  // Add more tests as needed
});
