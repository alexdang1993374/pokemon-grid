import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderWithQueryClient } from '../test/renderWithQueryClient';
import { HomePage } from './HomePage';

// Example test to show the setup works. Replace or add to it.
describe('HomePage', () => {
  it('renders the page heading', () => {
    renderWithQueryClient(<HomePage />);

    expect(screen.getByRole('heading', { name: 'Pokémon Grid' })).toBeInTheDocument();
  });
});
