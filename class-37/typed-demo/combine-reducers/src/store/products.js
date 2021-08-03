
// state object
const initialState = {
  categories: [
    { displayName: 'Electronics', normalizedName: 'electronics', description: 'test'},
    { displayName: 'Food', normalizedName: 'food', description: 'test'},
  ],
  products: [
    { category: 'electronics', price: 100, description: 'test', name: 'ipod', inventoryCount: 10000000 },
    { category: 'electronics', price: 100, description: 'test', name: 'zune', inventoryCount: 10000000 },
    { category: 'food', price: 100, description: 'test', name: 'banana', inventoryCount: 100 },
  ],
  activeCategory: '',
}

// Reducer that will receive actions and update state.
export default function productsReducer(state = initialState, action) {
  switch(action.type) {
    case 'ACTIVATE':
      return { ...state, activeCategory: action.payload }
    default:
      return state;
  }
}


