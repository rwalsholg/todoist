/**
 * Main application root component. Manages dark mode state using React hooks, wraps the application
 * with context providers (SelectedProjectProvider and ProjectsProvider) for global state management,
 * and renders the Header and Content layout components. Accepts an optional darkModeDefault prop
 * and applies the darkmode CSS class when dark mode is enabled.
 */
import {
  ProjectsContext,
  ProjectsProvider,
  useProjectsValue,
} from './projects-context';

import {
  SelectedProjectContext,
  SelectedProjectProvider,
  useSelectedProjectValue,
} from './selected-project-context';

export {
  ProjectsContext,
  ProjectsProvider,
  useProjectsValue,
  SelectedProjectContext,
  SelectedProjectProvider,
  useSelectedProjectValue,
};
