import React from 'react';

const NavFooter = () => (
  <div className="NavFooter social_container d-flex justify-content-between">
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
);

export default NavFooter;
