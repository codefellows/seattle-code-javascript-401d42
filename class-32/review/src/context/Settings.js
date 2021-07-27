import React, { useState } from 'react';

export const SettingsContext = React.createContext();

export default function SettingsProvider(props) {

  const [hide, setHide] = useState(false);
  const [itemNumber, setItemNumber] = useState(3);
  const [sort, setSort] = useState('difficulty');

  return (
    <SettingsContext.Provider value={{ hide, itemNumber, sort }}>
      {props.children}
    </SettingsContext.Provider>
  )
}
