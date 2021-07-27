import React from 'react';
// import 'normalize.css';
// import '@blueprintjs/core/lib/css/blueprintjs.css'

import SettingsProvider from './context/Settings.js';
import ToDo from './components/todo/todo.js';

export default class App extends React.Component {
  render() {
    return (
      <SettingsProvider>
        <ToDo />
      </SettingsProvider>
    );
  }
}
