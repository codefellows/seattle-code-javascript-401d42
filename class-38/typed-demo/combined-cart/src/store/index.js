import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// import thunk from '../middleware/thunk.js';
import thunk from 'redux-thunk';

import categoriesReducer from "./categories";
import productsReducer from "./products";
import cartReducer from "./cart";

let reducers = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  categories: categoriesReducer,
});

let middlewares = applyMiddleware(thunk);

export default createStore(reducers, composeWithDevTools(middlewares));
