// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);  // Mencari teks "Learn React"
  expect(linkElement).toBeInTheDocument();  // Memastikan elemen ini ada
});
