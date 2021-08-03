const initialState = [
  {name: 'John', votes: 0},
  {name: 'Jacob', votes: 0},
  {name: 'Chance', votes: 0},
];


function candidateReducer(state = initialState, action) {

  switch(action.type) {
    case 'INCREMENT':
      return state.map(person => {
        if(person.name === action.payload) {
          person.votes = person.votes + 1;
        }
        return person;
      });
    default:
      return state;
  }

}

export default candidateReducer;
