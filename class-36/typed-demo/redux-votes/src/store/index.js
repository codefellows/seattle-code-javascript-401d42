import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import candidates from './candidates.js';

let reducers = combineReducers({ candidates });

// pass my `reducers` into createStore
export default createStore(reducers, composeWithDevTools());
