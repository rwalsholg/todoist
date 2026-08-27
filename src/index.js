/**
 * Main application root component. Manages dark mode state using React hooks, wraps the application
 * with context providers (SelectedProjectProvider and ProjectsProvider) for global state management,
 * and renders the Header and Content layout components. Accepts an optional darkModeDefault prop
 * and applies the darkmode CSS class when dark mode is enabled.
 */
import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import './App.scss';

render(<App />, document.getElementById('root'));
