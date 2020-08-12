import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userRegistration } from '../actions/UserActions';

const Register = () => {
  const dispatch = useDispatch();
  const userState = useSelector(state => state.user);
  const history = useHistory();

  const [error, setError] = useState(null);

  const signup = e => {
    e.preventDefault();
    const user = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
      password_confirmation: e.target[3].value,
    };
    dispatch(userRegistration(user));
  };

  useEffect(() => {
    if (userState.loggedIn && userState.status !== 'error') history.push('/');
    else if (userState.status === 'error') setError('Ups! It seems like that email is already taken, please provide another one.');
  }, [userState.loggedIn, userState.status]);

  return (
    <div className="col-12 col-md-10 d-flex flex-column justify-content-center align-items-center w-100">
      <div className="title">
        <h2>Create your account</h2>
        <p className="alert">{error}</p>
      </div>
      <form
        onSubmit={signup}
        className="d-flex flex-column justify-content-center align-items-center w-100"
      >
        <input type="text" placeholder="Enter your name" />
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />
        <input type="password" placeholder="Confirm your Password" />
        <button type="submit">Sign up!</button>
      </form>
    </div>
  );
};

export default Register;
