import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import NewPage from '../newPage/graficoAis';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="navbar">
          <div className="logo-section">
            {/* Logo ou conteúdo adicional */}
          </div>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Início</Link></li>
              <li><Link to="/carrossel">Gráficos Gerais</Link></li>
              <li><Link to="/nova-pagina">Gráficos AIS</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
