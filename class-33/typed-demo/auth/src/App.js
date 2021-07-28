import { useContext } from 'react';
import cookie from 'react-cookies';
import './App.css';
import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';

import { ThemeContext } from './context/Theme.js';
import SettingsForm from './components/SettingsForm.js';
import LoginForm from './components/Login.js';
import Auth from './components/Auth.js';

function App() {

  const theme = useContext(ThemeContext);
  console.log(cookie.load('token'));
  return (
    <div className={`App ${theme.mode}`}>
      <h1>My Super Sweet App</h1>
      <SettingsForm />
      <LoginForm />
      <Auth capability="read">
        <p>Can you read??</p>
      </Auth>
      <Auth capability="delete">
        <p>Can you delete??</p>
      </Auth>
    </div>
  );
}

export default App;
