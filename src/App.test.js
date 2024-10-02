import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app correctly', () => {
  render(<App />);
  const headingElement = screen.getByText(/learn vite/i);
  expect(headingElement).toBeInTheDocument();
});
