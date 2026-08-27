/**
 * Main application root component. Manages dark mode state using React hooks, wraps the application
 * with context providers (SelectedProjectProvider and ProjectsProvider) for global state management,
 * and renders the Header and Content layout components. Accepts an optional darkModeDefault prop
 * and applies the darkmode CSS class when dark mode is enabled.
 */
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Header } from '../components/layout/Header';

jest.mock('../context', () => ({
  useSelectedProjectValue: jest.fn(() => ({ selectedProject: 1 })),
  useProjectsValue: jest.fn(() => ({ projects: [] })),
}));

beforeEach(cleanup);

describe('<Header />', () => {
  describe('Success', () => {
    it('renders the header component', () => {
      const { queryByTestId } = render(<Header />);
      expect(queryByTestId('header')).toBeTruthy();
    });

    it('renders the header component and activates dark mode using onClick', () => {
      const darkMode = false;
      const setDarkMode = jest.fn(() => !darkMode);

      const { queryByTestId } = render(
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      );
      expect(queryByTestId('header')).toBeTruthy();

      fireEvent.click(queryByTestId('dark-mode-action'));
      expect(setDarkMode).toHaveBeenCalledWith(true);
    });

    it('renders the header component and set quick add task to true using onClick', () => {
      const darkMode = false;

      const { queryByTestId } = render(<Header darkMode={darkMode} />);
      expect(queryByTestId('header')).toBeTruthy();

      fireEvent.click(queryByTestId('quick-add-task-action'));
      expect(queryByTestId('add-task-main')).toBeTruthy();
    });
  });
});
