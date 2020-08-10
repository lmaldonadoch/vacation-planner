import React, { useEffect, useLayoutEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLoggedIn, userLogout } from '../actions/UserActions';

const Nav = () => {
  const dispatch = useDispatch();
  const userState = useSelector(state => state.user);
  const location = useLocation();

  useLayoutEffect(() => {
    const elem = location.pathname.split('/')[1] === ''
      ? document.getElementById('home')
      : document.getElementById(`${location.pathname.split('/')[1]}`);
    const li = document.getElementById('nav-links').children;
    [...li].forEach(elem => {
      const targetChild = [...elem.children][0];
      if (targetChild) {
        targetChild.classList.remove('active');
      } else {
        elem.classList.remove('active');
      }
    });
    if (elem) {
      elem.classList.add('active');
    } else {
      document.getElementById('home').classList.add('active');
    }
  }, [location.pathname]);

  useEffect(() => {
    dispatch(userLoggedIn());
  }, [userState.loggedIn]);

  const logout = () => {
    dispatch(userLogout());
  };

  const clickHandler = e => {
    const li = document.getElementById('nav-links').children;
    [...li].forEach(elem => {
      const targetChild = [...elem.children][0];
      if (targetChild) {
        targetChild.classList.remove('active');
      } else {
        elem.classList.remove('active');
      }
    });
    e.target.classList.add('active');
  };

  if (userState.loggedIn && userState.user.admin) {
    return (
      <nav className="col-12 col-md-2 d-flex flex-column justify-content-center">
        <div className="logo" />
        <ul id="nav-links">
          <Link to="/" key="destinations" onClick={clickHandler}>
            <li id="home">Destinations</li>
          </Link>
          <Link to="/dates" key="schedule" onClick={clickHandler}>
            <li id="dates">Schedule Vacations</li>
          </Link>
          <Link
            to="/add-destination"
            key="add-destination"
            onClick={clickHandler}
          >
            <li id="add-destination">Create a new Destination</li>
          </Link>
          <li key={userState.loggedIn}>
            <button onClick={logout} type="button">
              Log Out
            </button>
          </li>
        </ul>

        <div className="social_container d-flex justify-content-between">
          <a
            href="https://twitter.com/LuisAngelMCh"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            href="https://github.com/lmaldonadoch"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/lmaldonadoch/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="mailto: lmaldonadoch@gmail.com">
            <i className="fas fa-envelope" />
          </a>
        </div>
      </nav>
    );
  }

  if (userState.loggedIn) {
    return (
      <nav className="col-12 col-md-2 d-flex flex-column justify-content-center">
        <div className="logo" />
        <ul id="nav-links">
          <Link to="/" key="destinations" onClick={clickHandler}>
            <li id="home">Destinations</li>
          </Link>
          <Link to="/dates" key="schedule" onClick={clickHandler}>
            <li id="dates">Schedule Vacations</li>
          </Link>
          <li key={userState.loggedIn}>
            <button onClick={logout} type="button">
              Log Out
            </button>
          </li>
        </ul>

        <div className="social_container d-flex justify-content-between">
          <a
            href="https://twitter.com/LuisAngelMCh"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            href="https://github.com/lmaldonadoch"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/lmaldonadoch/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="mailto: lmaldonadoch@gmail.com">
            <i className="fas fa-envelope" />
          </a>
        </div>
      </nav>
    );
  }
  return (
    <nav className="col-12 col-md-2 d-flex flex-column justify-content-center">
      <div className="logo" />
      <ul id="nav-links">
        <Link to="/" key="destinations" onClick={clickHandler}>
          <li id="home">Destinations</li>
        </Link>
        <Link to="/login" key="login" onClick={clickHandler}>
          <li id="login">Log In</li>
        </Link>
        <Link to="/register" key={userState.loggedIn} onClick={clickHandler}>
          <li id="register">Create an Account!</li>
        </Link>
      </ul>

      <div className="social_container d-flex justify-content-between">
        <a
          href="https://twitter.com/LuisAngelMCh"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter" />
        </a>
        <a
          href="https://github.com/lmaldonadoch"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/lmaldonadoch/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin-in" />
        </a>
        <a href="mailto: lmaldonadoch@gmail.com">
          <i className="fas fa-envelope" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
