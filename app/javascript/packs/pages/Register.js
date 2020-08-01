import React, { useEffect } from 'react';
import { userRegistration } from '../actions/UserActions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const history = useHistory();

  const signup = (e) => {
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
    if (userState.loggedIn) history.push('/');
  }, [userState.loggedIn]);

  return (
    <div className="col-12 col-md-9">
      <form onSubmit={signup}>
        <input type="text" placeholder="Enter your name" />
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="Confirm your Password" />
        <button tye="submit">Sign up!</button>
      </form>
    </div>
  );
};

export default Register;
