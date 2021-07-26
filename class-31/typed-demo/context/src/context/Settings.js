import React from 'react';

export const SettingsContext = React.createContext();

class SettingsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      twitter: 'SuperAwesome@twitter',
      title: 'Super Awesome Site'
    }
  }

  render() {
    return (
      <SettingsContext.Provider value={this.state}>
        {this.props.children}  
      </SettingsContext.Provider>
    )
  }
}

export default SettingsProvider;
