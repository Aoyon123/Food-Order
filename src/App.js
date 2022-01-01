import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Profile from "./Components/Profile/Profile";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Forgot from "./Components/Forgot/Forgot";
import initializeAuthentication from "./Components/Login/firebase.initialize";
initializeAuthentication();
export const loggedInUser = createContext();

function App() {
  const [loginUser, setLoginUser] = useState({});
  return (
    <loggedInUser.Provider value={[loginUser, setLoginUser]}>
      <Router>
        <div>
          <Switch>
            <Route path="/about">
              <h1>About</h1>
            </Route>

            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/profile">
              <Profile></Profile>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/Forgot">
              <Forgot></Forgot>
            </Route>
          </Switch>
        </div>
      </Router>
    </loggedInUser.Provider>
  );
}

export default App;
