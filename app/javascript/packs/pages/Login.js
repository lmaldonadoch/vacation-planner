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
    dispatch(userLogin(user));
  };

  useEffect(() => {
    if (userState.loggedIn) history.push('/');
  }, [userState.loggedIn]);

  return (
    <div className="col-12 col-md-9">
      <form
        onSubmit={login}
        className="d-flex flex-column justify-content-center align-items-center h-100"
      >
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />
        <button tye="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
