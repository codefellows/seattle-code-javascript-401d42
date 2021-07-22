import { useReducer } from 'react';

// the shape our state
const initialState = {
  characters: [],
  active: {},
}

// function that controls state
const reducer = (state, action) => {

  // action === { type, paylaod } 

  switch(action.type) {
    case 'ADD_CHARACTER':
      return {...state, characters: [...state.characters, action.payload]};
    case 'REMOVE_CHARACTER':
      return {...state, characters: state.characters.filter(char => char.name !== action.payload)}
    case 'ACTIVATE_CHARACTER':
      return {...state, active: state.characters.filter(char => char.name === action.payload)}
    default:
      return state;
  }
}

// actions that can be run by our component
const addCharacter = (character) => {
  return {
    type: 'ADD_CHARACTER',
    payload: character,
  }
}
const removeCharacter = (name) => {
  return {
    type: 'REMOVE_CHARACTER',
    payload: name,
  }
}

function Characters(props) {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>Characters</h1>
      <ul>
        <li onClick={() => dispatch(addCharacter({name: 'Jacob'}))}>Jacob</li>
      </ul>
      <ul>
        <h2>Added Characters</h2>
        {state.characters.map(char => {
          return <li
            key={char.name}
            onClick={() => dispatch(removeCharacter(char.name))}>
              {char.name}
            </li>
        })}
      </ul>
    </>
  )
}

export default Characters;
