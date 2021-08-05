import React from 'react';
import { Provider } from 'react-redux';
import store from './store-rtk/index.js';

function App() {
  return (
    <Provider store={store}>
      <h1>hello world</h1>
    </Provider>
  )
}

export default App;