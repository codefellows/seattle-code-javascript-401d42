import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Form from './components/Form.js';
import Pokemon from './components/Pokemon.js';

function App() {
  let [pokemon, setPokemon] = useState([]);

  // componentDidMount() { // this a method that lives on a type React.Component

  // }
  
  useEffect(() => {
    // call  our api and setPokemon;
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(response => {
      let pokemonNames = response.data.results.map(pokemon => pokemon.name);
      setPokemon(pokemonNames);
    });
  }, []);  // nothing passed in
      
  return (
    <div className="App">
      <Form pokemon={pokemon} handlePokemon={setPokemon}/>
      {/* {pokemon.length ? null : <Pokemon monsters={pokemon}/>} */}
      <Pokemon monsters={pokemon} />
    </div>
  );
}

export default App;
