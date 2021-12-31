import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { loggedInUser } from "../../App";
import "./Login.css";

const Login = () => {
  const [loginUser, setLoginUser] = useContext(loggedInUser);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [newUser, setNewUser] = useState(true);
  const [user, setUser] = useState({
    isLoggedIn: false,
    fullName: "",
    email: "",
    dateOfBirth: "",
    username: "",
    password: "",
  });
  const handleForm = (e) => {};
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
  return (
    <div class="form-design">
      <div className="m-5">
        <div className="row d-flex justify-content-center ">
          {newUser ? <h1><span class="signup-design" >Create A New Account</span></h1> : <h1>Login</h1>}
          <form action="" onSubmit={handleForm} className="form-group">
            <label htmlFor="fullName">FullName</label>
            <input
              type="text"
              className="form-control"
              onBlur={handleInput}
              name="fullName"
              id="fullName"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              onBlur={handleInput}
              name="email"
              id="email"
            />
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              onBlur={handleInput}
              name="dateOfBirth"
              id="dateOfBirth"
            />
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              onBlur={handleInput}
              name="username"
              id="username"
            />
            <div class="password-design">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                onBlur={handleInput}
                name="password"
                id="password"
              />
            </div>

            <div class="submit-button">
              <input type="submit" className="btn-primary" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
