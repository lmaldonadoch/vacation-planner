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

  const clickHandler = (e) => {
    let li = document.getElementById('nav-links').children;
    [...li].forEach((li) => {
      li.classList.remove('active');
    });
    e.target.classList.add('active');
  };

  console.log(userState);

  if (userState.loggedIn) {
    return (
      <nav className="col-12 col-md-3 d-flex flex-column justify-content-center">
        <div className="logo" />
        <ul id="nav-links">
          <Link
            to="/"
            key={'destinations'}
            onClick={clickHandler}
            className="active"
          >
            <li id="home">Destinations</li>
          </Link>
          <Link
            to="/schedule-vacations"
            key={'schedule'}
            onClick={clickHandler}
          >
            <li id="dates">Schedule Vacations</li>
          </Link>
          <li onClick={logout} key={userState.loggedIn}>
            Log Out
          </li>
        </ul>

        <div className="social-container w-100 d-flex justify-content-between">
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
    <nav className="col-12 col-md-3 d-flex flex-column justify-content-center">
      <div className="logo" />
      <ul id="nav-links">
        <Link to="/" key={'destinations'} onClick={clickHandler}>
          <li id="home">Destinations</li>
        </Link>
        <Link to="/login" key={'login'} onClick={clickHandler}>
          <li id="login">Log In</li>
        </Link>
        <Link to="/register" key={userState.loggedIn} onClick={clickHandler}>
          <li id="register">Create an Account!</li>
        </Link>
      </ul>

      <div className="social-container w-100 d-flex justify-content-between">
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
};

export default Nav;
