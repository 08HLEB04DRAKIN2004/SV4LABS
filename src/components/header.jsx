<<<<<<< HEAD
import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material'; 
import { Link } from 'react-router-dom'; 

function Header() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar style={{ justifyContent: 'center' }}>
                    <Typography variant="h6">
                        Учет допуска работников предприятия к опасным работам
                    </Typography>
                </Toolbar>
                <Toolbar>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/about">About</Button>
                    <Button color="inherit" component={Link} to="/contact">Contact</Button>
                    <Button color="inherit" component={Link} to="/accounting">Accounting</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

=======
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
  
>>>>>>> 4cce80ec24b3bff04be84cba279ff63f92ad5517
export default Header;
