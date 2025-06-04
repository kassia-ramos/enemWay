import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  return (
    <header>
      <div className="container header-container">
        <Link to="/" className="logo">Enem<span>Way</span></Link>
        <nav>
          <ul className="nav-links">
            <li><a href="#inicio">Início</a></li>
            <li><a href="#programas">Programas</a></li>
            <li><a href="#calendario">Calendário</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <Link to="/login" className="btn btn-outline">Login</Link>
          <Link to="/cadastro" className="btn btn-primary">Cadastre-se</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
