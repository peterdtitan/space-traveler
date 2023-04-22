import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../Header';

describe('Header component', () => {
  test('renders Header component correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
