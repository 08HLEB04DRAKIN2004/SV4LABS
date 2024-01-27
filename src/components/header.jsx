// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'; // Импортируем файл стилей
function Header() {
    return (
      <header className="header">
        <h1 className="header-title">учет допуска работников предприятия к опасным работам</h1>
        <nav>
          <ul className="nav-links">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">About</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
            <li><Link to="/accounting" className="nav-link">Accounting</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
  
export default Header;
