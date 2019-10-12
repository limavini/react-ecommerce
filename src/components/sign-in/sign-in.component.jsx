import React, { useState } from "react";

const SignIn = () => {
  const [state, setState] = useState({ email: "", password: "" });

  const handleSubmit = event => {
    event.preventDefault();
    setState({ email: "", password: "" });
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setState(state => ({ ...state, [name]: value }));
  };

  return (
    <div className="sign-in">
      <h2>I aleady have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          value={state.email}
          onChange={handleChange}
          required
        />
        <label>Email</label>

        <input
          name="password"
          type="password"
          value={state.password}
          onChange={handleChange}
          required
        />
        <label>Password</label>

        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
};

export default SignIn;
