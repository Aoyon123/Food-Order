import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { initializeApp } from "firebase/app";

//import { getAuth, signInWithProvider, GoogleAuthProvider } from "firebase/auth";
//import firebaseConfig from "./firebase.config";

import { useHistory } from "react-router-dom";
import { loggedInUser } from "../../App";
import "./Login.css";
import { Button } from "bootstrap";
import initializeAuthentication from "./firebase.initialize";
initializeAuthentication();
initializeApp();
const Login = () => {
  const [loginUser, setLoginUser] = useContext(loggedInUser);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  // if (firebase.apps.length === 0) {
  //   firebase.initializeApp(firebaseConfig);
  // }
  //const provider = new GoogleAuthProvider();
  const [newUser, setNewUser] = useState(false);
  console.log(loginUser);
  const [user, setUser] = useState({
    isLoggedIn: false,
    fullName: "",
    email: "",
    dateOfBirth: "",
    username: "",
    password: "",
  });
  const handleForm = (e) => {
    e.preventDefault();
    if (newUser) {
      fetch("http://localhost:5000/addUser", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user),
      }).then((res) => {
        console.log(res);
      });
    } else {
      fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user),
      }).then((res) => {
        console.log("Response", res);

        setLoginUser({ username: user.username, password: user.password });
        history.replace(from);
      });
    }
  };
  const handleInput = (e) => {
    let isFormValid = true;
    if (e.target.name == "fullName") {
      isFormValid = true;
    }
    if (e.target.name == "email") {
      console.log(e.target.value);
      if (validateEmail(e.target.value) == true) {
        isFormValid = true;
      } else {
        alert("You have entered an invalid email address!");
        isFormValid = false;
      }
    }
    if (e.target.name == "dateOfBirth") {
      isFormValid = true;
    }
    if (e.target.name == "username") {
      isFormValid = true;
    }
    if (e.target.name == "password") {
      if (e.target.value.length > 6) {
        isFormValid = true;
      } else {
        alert("Please Type More Than 6 word");
        isFormValid = false;
      }
    }
    if (isFormValid) {
      const newUser = { ...user };
      newUser[e.target.name] = e.target.value;
      setUser(newUser);
    }
  };
  console.log(user);
  const validateEmail = (email) => {
    if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }

    return false;
  };
  console.log(loginUser);
  // const handleGoogleSignIn = () => {
  //   // firebase.initializeApp(firebaseConfig)
  //   firebase
  //     .auth()
  //     .signInWithPopup(provider)
  //     .then((result) => {
  //       const { displayName, email } = result.user;
  //       const signedInUser = {
  //         name: displayName,
  //         email: email,
  //       };
  //       setLoginUser(signedInUser);
  //       history.replace(from);
  //     })
  //     .catch((error) => {
  //       var errorMessage = error.message;
  //       console.log(errorMessage);
  //     });
  // };
  return (
    <div className="form-design">
      <div className="m-5">
        <div className="row d-flex justify-content-center ">
          {newUser ? (
            <h1>
              <span className="signup-design">Create A New Account</span>
            </h1>
          ) : (
            <h1>Login</h1>
          )}
          <form action="" onSubmit={handleForm} className="form-group">
            {newUser && <label htmlFor="fullName">FullName</label>}
            {newUser && (
              <input
                type="text"
                className="form-control"
                onBlur={handleInput}
                name="fullName"
                id="fullName"
                required
              />
            )}
            {newUser && <label htmlFor="email">Email</label>}
            {newUser && (
              <input
                type="email"
                className="form-control"
                onBlur={handleInput}
                name="email"
                id="email"
                required
              />
            )}
            {newUser && <label htmlFor="dateOfBirth">Date of Birth</label>}
            {newUser && (
              <input
                type="date"
                className="form-control"
                onBlur={handleInput}
                name="dateOfBirth"
                id="dateOfBirth"
                required
              />
            )}

            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              onBlur={handleInput}
              name="username"
              id="username"
              required
            />
            <div className="password-design">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                onBlur={handleInput}
                name="password"
                id="password"
                required
              />
            </div>
            {!newUser && (
              <input type="checkbox" name="remember" id="remember" />
            )}
            {!newUser && (
              <label htmlFor="remember" className="m-3">
                {" "}
                Remember Me
              </label>
            )}
            {!newUser && (
              <Link to="/forgot" className="m-3">
                Forgot Password
              </Link>
            )}
            <div className="submit-button">
              <input
                type="submit"
                className="btn-primary"
                value={newUser ? "Create an Account" : "Login"}
              />
            </div>
          </form>
          <input
            style={{ display: "none" }}
            type="checkbox"
            onChange={() => setNewUser(!newUser)}
            name="newUser"
            id="newUser"
          />
          <input
            style={{ display: "none" }}
            type="checkbox"
            onChange={() => setNewUser(!newUser)}
            name="newUser"
            id="newUser"
          />
          {!newUser ? (
            <div className="haveaccount">
              Don’t have an account?{" "}
              <label htmlFor="newUser">
                <span className="createaccount"> Create an account</span>{" "}
              </label>
            </div>
          ) : (
            <div className="lastpart">
              Already have an account?
              <label htmlFor="newUser">
                {" "}
                <span className="logindesign"> Login </span>{" "}
              </label>
            </div>
          )}
        </div>
      </div>

      <div className="">
        <Button
          // onClick={handleGoogleSignIn}
          className="bg-light text-dark m-4 p-3"
        >
          {" "}
          <img
            style={{ width: "40px" }}
            src="https://icons-for-free.com/iconfiles/png/512/google-1320568243143037383.png"
            alt=""
            className="ml-2 mr-5"
          />{" "}
          <span className="mr-5 ml-3 font-weight-bold">
            Continue with Google
          </span>{" "}
        </Button>
      </div>
    </div>
  );
};

export default Login;
