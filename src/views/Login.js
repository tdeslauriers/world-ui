import React from "react";
import PropTypes from "prop-types";

const Login = (props) => {
  return (
    <div>
      <h1>Please login</h1>
      <form>
        <label>
          <p>Username</p>
        </label>
        <input type="text" />
        <label>
          <p>Password</p>
        </label>
        <input type="password" />
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {};

export default Login;
