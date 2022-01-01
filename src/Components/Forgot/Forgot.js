import React, { useState } from "react";

const Forgot = () => {
  const [user, setUser] = useState();
const handleUsernameForm = (e) => {

}
const handleUser =(e) => {
    if(e.target.name === "username"){
        fetch('')
    }
} 
  return (
    <div>
      <h2>Forgot Password</h2>
      <form action="" onSubmit={handleUsernameForm}>
          <label htmlFor="username">Username</label>
          <input type="text" onBlur={handleUser} name="username" id="username" />
      </form>
      <form action="">
        <label for="forpass">Password:</label>
        <br />
        <input type="text" id="forpass" name="forpasss" />
        <br />
        <label for="conpass">Confirm Password</label>
        <br />
        <input type="text" id="conspass" name="conpasss" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Forgot;
