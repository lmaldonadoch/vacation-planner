import React from 'react';
import axios from 'axios';

const Login = () => {
  const login = (e) => {
    e.preventDefault();

    axios
      .post('/api/v1/sessions', {
        user: {
          email: e.target[0].value,
          password: e.target[1].value,
        },
      })
      .then((response) => console.log(response.data));
  };

  return (
    <div>
      <form onSubmit={login}>
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="password" />
        <button tye="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
