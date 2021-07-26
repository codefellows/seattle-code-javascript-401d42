import React, { useState } from 'react';

// Create the context object, instatiate a new object for each of context.
export const ThemeContext = React.createContext(); // export for component Consumer.

function ThemeProvider(props) {

  const [mode, setMode] = useState('light');
  const [textSize, setTextSize] = useState('large');

  // the Provider value prop is the context data that any children can read from.
  return (
    <ThemeContext.Provider value={{ mode: mode, textSize }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;
