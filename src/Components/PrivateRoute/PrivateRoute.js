import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { loggedInUser } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [loginUser, setLoginUser] = useContext(loggedInUser);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loginUser.username ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
