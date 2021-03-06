import React, { useEffect, useState, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { userLogin } from '../actions/UserActions';

const Login = () => {
  const dispatch = useDispatch();
  const userState = useSelector(state => state.user);
  const history = useHistory();
  const location = useLocation();

  const [error, setError] = useState(null);

  let alert = document.getElementById('alert');

  useLayoutEffect(() => {
    alert = document.getElementById('alert');
  }, [location.pathname, userState.status]);

  const login = e => {
    e.preventDefault();
    const user = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    setError(null);
    alert.classList.add('d-none');
    dispatch(userLogin(user));
  };

  useEffect(() => {
    if (!userState.isFetching) {
      if (userState.loggedIn) history.push('/');
      else if (userState.status === '401') {
        setError("The email and password provided don't match our records. Please verify them.");
        alert.classList.remove('d-none');
      }
    }
  }, [userState.status, userState.isFetching]);

  return (
    <div className="Login col-12 col-md-10  d-flex flex-column justify-content-center align-items-center w-100">
      <div className="title">
        <h2>Log in</h2>
        <p className="alert d-none" id="alert">{error}</p>
      </div>
      <form
        onSubmit={login}
        className="d-flex flex-column justify-content-center align-items-center w-100"
      >
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
