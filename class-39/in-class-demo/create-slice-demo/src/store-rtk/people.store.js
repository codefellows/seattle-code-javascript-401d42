import { createSlice } from '@reduxjs/toolkit';

const peopleSlice = createSlice({
  name: 'people',
  initial: [{ name: 'bob'}, { name: 'sally'}, { name: 'tom' }],
  reducers: {
    add(state, action) {
      state.push({ name: action.payload })
    },
    remove(state, action) {
      return state.filter(person => person.name != action.payload)
    }
  }
});

export const { add, remove } = peopleSlice.actions;

// async action
export const get = () => async dispatch => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon')
  res.forEach(pokemon => dispatch(add(pokemon.name)))
}

export default peopleSlice.actions;