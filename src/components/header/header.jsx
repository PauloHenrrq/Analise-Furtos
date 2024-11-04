import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="navbar">
          <div className="logo-section">

          </div>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Início</Link></li>
              <li><Link to="/GraficoGerais">Gráficos Gerais</Link></li>
              <li><Link to="/GraficoAIS">Gráficos AIS</Link></li>
              <li><Link to="https://www.supesp.ce.gov.br/areas-integradas-de-seguranca-ais/" target='_blank'>SUPESP</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
