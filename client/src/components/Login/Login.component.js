import React from 'react';
import { LoginProps } from './Login.propTypes';
import styles from './Login.styles.scss';
import { useAuth0 } from "../../react-auth0-spa";
import { Link } from "react-router-dom";



export const Login = props => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    return (
        <div>
          {!isAuthenticated && (
            <button
              onClick={() =>
                loginWithRedirect({})
              }
            >
              Log in
            </button>
          )}
    
          {isAuthenticated && <button onClick={() => logout()}>Log out</button>}

          {/* NEW - add a link to the home and profile pages */}
    {isAuthenticated && (
      <span>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/profile">Profile</Link>
      </span>
    )}
        </div>
      );
    };


Login.propTypes = LoginProps.propTypes;
Login.defaultProps = LoginProps.defaultProps;
