import { useEffect } from 'react';

function Pokemon(props) {

  // we only passed on parameter here, only runs when he component first mounts.
  useEffect(() => {
    console.log('INITIAL RENDER', props);
  }, []);

  // only runs when something changes in props
  useEffect(() => {
    console.log('SOMETHING IN PROPS CHANGED', props);
  }, [props]);

  // only runs when he component 'unmounts' the DOM.
  useEffect(() => {
    return () => console.log('COMPONENT UNMOUNTING');
  });

  return (
    <>
      <h2>Pokemon List</h2>
      <div data-testid="list">
        {props.monsters.map(pokemon => <p data-testid={pokemon} key={pokemon}>{pokemon}</p>)}
      </div>
    </>
  )
}

export default Pokemon;
