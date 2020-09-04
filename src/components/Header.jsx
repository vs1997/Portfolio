import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to='/'>
        <h1 className='heading'>Saturday Developer</h1>
      </Link>
    </header>
  );
}

export default Header;
