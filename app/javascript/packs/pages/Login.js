import React, { useEffect } from 'react';
import { userLogin } from '../actions/UserActions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const history = useHistory();

  const login = (e) => {
    e.preventDefault();
    const user = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    console.log(user);
    dispatch(userLogin(user));
  };

  useEffect(() => {
    if (userState.loggedIn) history.push('/');
  }, [userState.loggedIn]);

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
