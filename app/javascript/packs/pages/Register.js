import React from 'react';
import axios from 'axios';

const Register = () => {
  const signup = (e) => {
    e.preventDefault();

    console.log(e.target[0].value, e.target[1].value, e.target[2].value);

    axios
      .post('/api/v1/registrations', {
        user: {
          email: e.target[0].value,
          password: e.target[1].value,
          password_confirmation: e.target[2].value,
        },
      })
      .then((response) => console.log(response.data));
  };

  return (
    <div>
      <form onSubmit={signup}>
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="Confirm your Password" />
        <button tye="submit">Sign up!</button>
      </form>
    </div>
  );
};

export default Register;
