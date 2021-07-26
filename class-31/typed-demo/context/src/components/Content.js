import React, { useContext } from 'react';

// grab the context you want to consume from, and opt in.
import { ThemeContext } from '../context/Theme.js';

function Content() {

  const theme = useContext(ThemeContext);

  return (
    <div class={theme.mode}>
      <p>
        Here is  my content, here is my current mode: {theme.mode}
      </p>
    </div>
  )
}

export default Content;
