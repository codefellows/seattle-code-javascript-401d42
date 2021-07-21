import { useState } from 'react';

function Form(props) {

  const [input, setInput] = useState('');

  const handleSubmit = (submit) => {
    submit.preventDefault();

    props.handlePokemon([...props.pokemon, input]); // what might go wrong here?
  }

  console.log(input);
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(typing) => setInput(typing.target.value)} type="text" />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default Form;
