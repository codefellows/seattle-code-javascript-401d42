// contains our intial state, our reducer for managing state, and actions that define our Application behavior.

const initialState = {
  candidates: [
    {name: "Mary", votes: 0},
    {name: "John", votes: 0},
    {name: "Bob", votes: 0 }
  ],
  totalVotes: 0,
}


// candidates Reducer
export default function candidatesReducer(state = initialState, action) {

  switch(action.type) {
    case 'INCREMENT':
      // gets a name on the payload, and adds 1 to both candiate object and totalVotes
      let totalVotes = state.totalVotes + 1;
      let candidates = state.candidates.map(candidate => {
        if(candidate.name === action.payload) {
          return { name: candidate.name, votes: candidate.votes + 1 }
        }
        return candidate;
      });
      return { totalVotes, candidates };
    case 'RESET':
      return initialState;
    default:
        return state;
  }
}

// define some actions that components might want to perform
export function increment(name) {
  return {
    type: 'INCREMENT',
    payload: name,
  }
}

export function reset() {
  return {
    type: 'RESET',
  }
}
