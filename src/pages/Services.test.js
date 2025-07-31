import { render, screen } from '@testing-library/react';
import Services from './Services';

test('renders Services page with title', () => {
  render(<Services />);
  const heading = screen.getByText(/Services/i);
  expect(heading).toBeInTheDocument();
});