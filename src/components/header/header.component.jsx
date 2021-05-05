import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/penpal.svg';

import './header.styles.scss';

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/home">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/profile">
        Profile
      </Link>
      <Link className="option" to="/matches">
        Find a Penpal!
      </Link>
      <Link className="option" to="/signout">
        Sign Out
      </Link>
    </div>
  </div>
);

export default Header;