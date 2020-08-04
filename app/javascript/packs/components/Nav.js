import React, { useEffect, useLayoutEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { userLoggedIn, userLogout } from '../actions/UserActions';
import { useDispatch, useSelector } from 'react-redux';

const Nav = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);
  const location = useLocation();

  useLayoutEffect(() => {
    let elem =
      location.pathname.split('/')[1] === ''
        ? document.getElementById('home')
        : document.getElementById(`${location.pathname.split('/')[1]}`);
    let li = document.getElementById('nav-links').children;
    [...li].forEach((elem) => {
      let targetChild = [...elem.children][0];
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

  console.log(userState);

  useEffect(() => {
    dispatch(userLoggedIn());
  }, [userState.loggedIn]);

  const logout = () => {
    dispatch(userLogout());
  };

  const clickHandler = (e) => {
    let li = document.getElementById('nav-links').children;
    [...li].forEach((elem) => {
      let targetChild = [...elem.children][0];
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
          <Link to="/" key={'destinations'} onClick={clickHandler}>
            <li id="home">Destinations</li>
          </Link>
          <Link to="/dates" key={'schedule'} onClick={clickHandler}>
            <li id="dates">Schedule Vacations</li>
          </Link>
          <Link
            to="/add-destination"
            key={'add-destination'}
            onClick={clickHandler}
          >
            <li id="add-destination">Create a new Destination</li>
          </Link>
          <li onClick={logout} key={userState.loggedIn}>
            Log Out
          </li>
        </ul>

        <div className="social_container d-flex justify-content-between">
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

  if (userState.loggedIn) {
    return (
      <nav className="col-12 col-md-2 d-flex flex-column justify-content-center">
        <div className="logo" />
        <ul id="nav-links">
          <Link to="/" key={'destinations'} onClick={clickHandler}>
            <li id="home">Destinations</li>
          </Link>
          <Link to="/dates" key={'schedule'} onClick={clickHandler}>
            <li id="dates">Schedule Vacations</li>
          </Link>
          <li onClick={logout} key={userState.loggedIn}>
            Log Out
          </li>
        </ul>

        <div className="social_container d-flex justify-content-between">
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
    <nav className="col-12 col-md-2 d-flex flex-column justify-content-center">
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

      <div className="social_container d-flex justify-content-between">
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
