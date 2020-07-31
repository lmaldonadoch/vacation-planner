import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  useEffect = (() => {}, []);
  return (
    <nav>
      <ul>
        <div className="logo" />
        <Link to="/">
          <li id="home">Market Overview</li>
        </Link>
        <Link to="/details">
          <li id="details">Stock Details</li>
        </Link>
        <li></li>
      </ul>
    </nav>
  );
};

export default Nav;
