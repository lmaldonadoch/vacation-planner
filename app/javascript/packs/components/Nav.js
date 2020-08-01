import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { userLoggedIn, userLogout } from '../actions/UserActions';
import { useDispatch, useSelector } from 'react-redux';

const Nav = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(userLoggedIn());
  }, [userState.loggedIn]);

  const logout = () => {
    dispatch(userLogout());
  };

  console.log(userState);

  if (userState.loggedIn) {
    return (
      <nav className="col-12 col-md-2 d-flex flex-column justify-content-center">
        <div className="logo" />
        <ul>
          <Link to="/" key={'destinations'}>
            <li>Destinations</li>
          </Link>
          <Link to="/schedule-vacations" key={'schedule'}>
            <li>Schedule Vacations</li>
          </Link>
          <li onClick={logout} key={userState.loggedIn}>
            Log Out
          </li>
        </ul>

        <div className="social_container">
          <a href="https://twitter.com/LuisAngelMCh" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://github.com/lmaldonadoch" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/lmaldonadoch/" target="_blank">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="mailto: lmaldonadoch@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </nav>
    );
  }
  return (
    <nav>
      <ul>
        <Link to="/" key={'destinations'}>
          <li>Destinations</li>
        </Link>
        <Link to="/login" key={'login'}>
          <li>Log In</li>
        </Link>
        <Link to="/register" key={userState.loggedIn}>
          <li>Create an Account!</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
