import React from 'react';

import { SettingsContext } from '../context/Settings';
import { ThemeContext } from '../context/Theme';

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>

        <SettingsContext.Consumer>
          {settings => {
            return(
            <>
              <h1>{settings.title}</h1>
            </>
          )}}
        </SettingsContext.Consumer>

        <ThemeContext.Consumer>
          {theme => (
            <>
              <p>Current Mod: {theme.mode}</p>
            </>
          )}
        </ThemeContext.Consumer>

      </div>
    )
  }
}

export default Header;
