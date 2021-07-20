import React, {useState} from 'react';

function Person(props) {

  const [name, setName] = useState('someone');

  return (
    <>
      <p data-testid="name">Person name: {name}</p>
      <p data-testid="age">Person age: {props.age}</p>
    </>
  )
}

export default Person;
