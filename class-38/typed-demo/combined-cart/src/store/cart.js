const initialState = [];

// 2 things that the reducer needs to run properly
function cartReducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_TO_CART':
      // check if payload is already in the cart, and use the new one.
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
    default:
      return state;
  }
}

// actions, by convention are defined in there own file, or next to the reducer, they can really be defined anywhere because they are just functions that return POJOs (plain old javascript objects).
export function addToCart(product) {
  return {
    type: 'ADD_TO_CART',
    payload: product,
  }
}

export default cartReducer;
