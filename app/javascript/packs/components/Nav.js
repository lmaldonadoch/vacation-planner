import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import userActions from '../actions/UserActions';
import { useDispatch, useSelector } from 'react-redux';

const Nav = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const [userLinks, setUserLinks] = useState([
    'Destinations',
    'Log In',
    'Register',
  ]);

  useEffect(() => {
    dispatch(userActions());
  }, []);

  useEffect(() => {
    setUserLinks(['Destinations']);
    console.log(userLinks);
    if (userState.loggedIn) {
      setUserLinks(['Destinations', 'Schedule Vacations', 'Log Out']);
    } else {
      setUserLinks(['Destinations', 'Log In', 'Register']);
    }
  }, [userState.loggedIn]);

  console.log(userState.loggedIn);

  return (
    <nav>
      <ul>
        {userLinks.map((link) => {
          const s = link.toLowerCase().replace(/\s/g, '');
          return (
            <Link to={`/${s}`} key={`/${s}`}>
              <li id={`${s}`}>{link}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
