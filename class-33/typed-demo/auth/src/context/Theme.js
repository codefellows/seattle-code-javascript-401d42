// 2 things need to happen here
import React, {useState} from 'react';

// first we export the `Context` object.
export const ThemeContext = React.createContext();

// secondly we export a the Provider component
export default function ThemeProvider(props) {

  const [mode, setMode] = useState('dark');
    
  // theme behavior
  function toggleMode() {
    if (mode === 'dark') {
      setMode('light');
    } else {
      setMode('dark');
    }
  }

  return (
    // value is just the magic word that a react Provider needs to set it's context values
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
