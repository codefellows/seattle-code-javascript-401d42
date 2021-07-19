import React from 'react';

// props will always the parameter of a functional component
function Header(props) {
  return (
    <>
      <h1>{props.greeting}</h1>
      <button onClick={() => props.changeTitle('Hello from Header')}>Change Title</button>
    </>
  )
}

export default Header;
