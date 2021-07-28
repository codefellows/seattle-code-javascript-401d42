import React from 'react';

import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

export const AuthContext = React.createContext();

const testUsers = [
  {
    password:'password',
    name:'Administrator',
    role:'admin',
    capabilities:['create','read','update','delete']
  },
  {
    password: 'password',
    name: 'Editor',
    role: 'editor',
    capabilities: ['read', 'update']
  },
  {
    password: 'password',
    name: 'Writer',
    role: 'writer',
    capabilities: ['create']
  }
]

export default class AuthProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      login: this.login,
      logout: this.logout,
      isAuthenticated: false,
      isAuthorized: this.isAuthorized,
      user: {capabilities: []},
    }
  }

  // valildating a username and password, setting a user if found and creating a token
  login = (username, password) => {
    // search our testUser and return a valid user.
    let validUser = {};
    let token = null;
    testUsers.forEach(user => {
      if (user.name === username && user.password === password) {
        validUser = user
      }
    });
    if (validUser) {
      token = jwt.sign(validUser, 'secretstring');
    }
    cookie.save('token', token);
    this.setState({ isAuthenticated: true, user: validUser });
  }

  logout = () => {
    this.setState({
      user: {capabilities:[]},
      isAuthenticated: false,
    });
  }

  isAuthorized = (capability) => {
    if (this.state.user) {
      return this.state.user.capabilities?.includes(capability);
    }
  }

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}
