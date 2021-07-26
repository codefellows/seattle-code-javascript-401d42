import React from 'react';

import { SettingsContext } from '../context/Settings.js';

class Footer extends React.Component{
  constructor() {
    super();
  }

  static contextType = SettingsContext;

  render() {
    return (
      <footer>
        <p>{this.context.twitter}</p>
      </footer>
    )
  }
}

export default Footer;
