import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Header = () => (
  <div className="header">
    <h3>
      <Link to="/">Home</Link>
    </h3>

  </div>
);

export default Header;
