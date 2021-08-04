const initialState = {
  list: [
    {displayName: 'Electronics', normalizedName: 'electronics', description: 'things that require power'},
    {displayName: 'Food', normalizedName: 'food', description: 'things that you eat'},
  ],
  activeCategory: '',
};

function categoriesReducer(state = initialState, action) {
  switch(action.type) {
    case 'ACTIVATE_CATEGORY':
      return {...state, activeCategory: action.payload};
    default:
      return state;
  }
}

export function activateCategory(categoryName) {
  return {
    type: 'ACTIVATE_CATEGORY',
    payload: categoryName,
  }
}


export default categoriesReducer;
