import React, { useState } from "react";
import PropTypes from "prop-types";
import { login } from "../api/userApi";

const Login = ({ setToken }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await login({ username, password });
    setToken(token);
    console.log(token);
  };

  return (
    <div>
      <h1>Please login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
        </label>
        <input
          placeholder="Username/email"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>
          <p>Password</p>
        </label>
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
