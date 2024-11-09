import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from '../../assets/barra-de-menu.png';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className="header">
      <button className='theftMenu'>
        <img src={Button} alt="Botão de Menu" onClick={handleShow} />
      </button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton closeVariant="white">
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav>
            <ul className="OffcanvasLinks">
              <li onClick={handleClose}><Link to="/">Início</Link></li>
              <li onClick={handleClose}><Link to="/GraficoGerais">Gráficos Gerais</Link></li>
              <li onClick={handleClose}><Link to="/GraficoAIS">Gráficos AIS</Link></li>
              <li><Link to="https://www.supesp.ce.gov.br/areas-integradas-de-seguranca-ais/" target='_blank'>SUPESP</Link></li>
            </ul>
          </nav>
          <p className='sobreMim'><Link to="https://github.com/PauloHenrrq" target='_blank'>Sobre mim</Link></p>
        </Offcanvas.Body>
      </Offcanvas>

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