import React from "react";
import { Login } from "../Login/Login.component";
import { useAuth0 } from "../../react-auth0-spa";
import "./LoginButton.css";
// import "./LoginButton.css";
function LoginButton() {
  const { loading } = useAuth0();
    if (loading) {
      return <div>Loading...</div>;
    }
    // if (isAuthenticated) {
    //   return <Redirect
    //   to={{
    //     pathname: "/MyTrip",
    //     state: { from: "/" }
    //   }}
    // />;

    // } 
  return (
    <div className="App">
      <header>
        <Login />
      </header>
    </div>
  );
}
export default LoginButton;
