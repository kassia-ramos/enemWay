import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function NavbarAut() {
  return (
    <header>
      <div className="container header-container">
        <Link to="/" className="logo">Enem<span>Way</span></Link>
      </div>
    </header>
  );
}

export default NavbarAut;