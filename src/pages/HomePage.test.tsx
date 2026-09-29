import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { HomePage } from './HomePage';

// Example test to show the setup works. Replace or add to it.
describe('HomePage', () => {
  it('renders the page heading', () => {
    render(<HomePage />);

    expect(screen.getByRole('heading', { name: 'Pokémon Grid' })).toBeInTheDocument();
  });
});
