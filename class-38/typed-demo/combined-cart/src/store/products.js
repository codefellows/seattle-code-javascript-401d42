import axios from 'axios';

const initialState = [
  {description: 'Fun to eat', name: 'Cereal', category: 'food', inventoryCount: 5, price: 10},
  {description: 'Great source of protein', name: 'Beef', category: 'food', inventoryCount: 8, price: 10},
  {description: 'Good for vision', name: 'Carrots', category: 'food', inventoryCount: 2, price: 10},
  {description: 'Iphone with no phone', name: 'Ipod', category: 'electronics', inventoryCount: 100, price: 10},
  {description: 'Great UI, poor execution', name: 'Zune', category: 'electronics', inventoryCount: 120, price: 10},
];

function productsReducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_PRODUCTS':
      return action.payload;
    case 'ADD_TO_CART':
      return state.map(product => {
        if (product.name === action.payload.name) {
          product.inventoryCount = product.inventoryCount - 1; 
        }
        return product;
      });
    case 'REMOVE_FROM_CART':
    default:
      return state;
  }
}

// async actions will look like this, a curried function, that will take in dispatch, and getState(not required but can be helpful)
export const fetchItems = () => async (dispatch, getState) => {
  let response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
  let fetchedProducts = response.data.results;

  dispatch(setProducts(fetchedProducts));
}

// a regular Redux action creator.
export function setProducts(products) {
  return {
    type: 'FETCH_PRODUCTS',
    payload: products,
  }
}

export default productsReducer;
