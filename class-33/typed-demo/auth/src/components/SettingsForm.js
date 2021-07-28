import { useContext } from 'react';
import { Switch } from '@blueprintjs/core';

import { ThemeContext } from '../context/Theme.js';

function SettingsForm() {

  // this varible will equal the `value` on the ThemeProvider props.
  const theme = useContext(ThemeContext);

  return (
    <form>
      <Switch label="Theme Mode" onChange={theme.toggleMode}/>
    </form>
  )
}

export default SettingsForm;
