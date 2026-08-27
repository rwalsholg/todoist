/**
 * Main application root component. Manages dark mode state using React hooks, wraps the application
 * with context providers (SelectedProjectProvider and ProjectsProvider) for global state management,
 * and renders the Header and Content layout components. Accepts an optional darkModeDefault prop
 * and applies the darkmode CSS class when dark mode is enabled.
 */
export const collatedTasks = [
  { key: 'INBOX', name: 'Inbox' },
  { key: 'TODAY', name: 'Today' },
  { key: 'NEXT_7', name: 'Next 7 Days' },
];
