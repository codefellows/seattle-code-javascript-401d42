let initialState = 0;

function votesReducer(state = initialState, action) {
  switch(action.type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
}

export default votesReducer;
