import {useContext} from 'react';

import { AuthContext } from '../context/Auth.js';

function Auth(props) {

  const { isAuthenticated, isAuthorized } = useContext(AuthContext);

  return (
    <>
      {(isAuthenticated && isAuthorized(props.capability))
        ? props.children
        : null
      }
    </>
  )
}

export default Auth;
