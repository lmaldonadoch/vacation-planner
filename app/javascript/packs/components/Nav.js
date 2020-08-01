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
      <nav>
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
