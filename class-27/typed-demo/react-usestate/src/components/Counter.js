import React from 'react';

function Counter(props) {

  return (
    <>
      <p data-testid="clicks">Number of times clicked: {props.number}</p>
      <button
        data-testid="handleClick"
        onClick={click => props.handleClick(props.number + 1)}>Click Me</button>
    </>
  )
}

export default Counter;
