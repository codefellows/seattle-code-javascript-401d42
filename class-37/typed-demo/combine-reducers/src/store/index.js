import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import productsReducer from './products.js';
import votesReducer from './votes.js';
import candidateReducer from './candidates.js';

// give your state property a name right here!
let reducers = combineReducers({
  store: productsReducer,
  totalVotes: votesReducer,
  candidates: candidateReducer,
});

// createStore runs the reducer(s) and returns an object that has all the fancy redux store properties.
export default createStore(reducers, composeWithDevTools());
