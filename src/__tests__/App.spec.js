/**
 * Main application root component. Manages dark mode state using React hooks, wraps the application
 * with context providers (SelectedProjectProvider and ProjectsProvider) for global state management,
 * and renders the Header and Content layout components. Accepts an optional darkModeDefault prop
 * and applies the darkmode CSS class when dark mode is enabled.
 */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { App } from '../App';

beforeEach(cleanup); // clean meeeeeeeeee!

describe('<App />', () => {
  it('renders the application', () => {
    const { queryByTestId } = render(<App />);
    expect(queryByTestId('application')).toBeTruthy();
    expect(
      queryByTestId('application').classList.contains('darkmode')
    ).toBeFalsy();
  });

  it('renders the application using dark mode', () => {
    const { queryByTestId } = render(<App darkModeDefault />);
    expect(queryByTestId('application')).toBeTruthy();
    expect(
      queryByTestId('application').classList.contains('darkmode')
    ).toBeTruthy();
  });
});
