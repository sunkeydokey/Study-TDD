import React from 'react';
import { render, screen } from '@testing-library/react';
import Profile from './Profile';

describe('Profile', () => {
  it('matches snapshot', () => {
    const utils = render(<Profile username="sunkeydokey" name="sunkee" />);
    expect(utils.container).toMatchSnapshot();
  });
  it('shows the texts correctly', () => {
    render(<Profile username="sunkeydokey" name="sunkee" />);
    screen.getByText('sunkeydokey');
    screen.getByText('(sunkee)');
    screen.getByText(/sunkee/);
  });
});
