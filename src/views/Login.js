import React, { useState } from "react";
import PropTypes from "prop-types";

const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <div>
      <h1>Please login</h1>
      <form>
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

Login.propTypes = {};

export default Login;
