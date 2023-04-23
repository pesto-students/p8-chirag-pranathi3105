import { render, screen } from '@testing-library/react';
import App from './App';

test('Step Counter', () => {
  render(<App />);
  const linkElement = screen.getByText(/Step Counter/i);
  expect(linkElement).toBeInTheDocument();
});
