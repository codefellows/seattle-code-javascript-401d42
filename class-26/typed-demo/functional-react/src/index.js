import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// React is performing Magic because this syntax is doing one of two possible operations:

// <App /> => class components this is converting this line to : new App()
  // we 'instantiate' or create a brand new thing that exists in memory.

// <App /> => function components just need to do this: App()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
