import React from 'react';
import './TheftReport.css';

import PM from '../../assets/ais/logo-pmce.png';

const TheftReport = () => {

  return (
    <div className="theft-report-container">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="subtitle">RELATÓRIO DE FURTOS<br /> EM FORTALEZA</h1>
            <p>
              Este é o sistema oficial de relatórios de furtos em Fortaleza.<br />
              Aqui você pode encontrar estatísticas detalhadas e relatórios sobre os casos registrados.
            </p>
            <a href="https://colab.research.google.com/drive/1Ig9-MdZs79C9ZDlt_Y16HaVQdsC_M8eT?usp=sharing" target='_blank' className="btn-schedule">VER DADOS</a>
          </div>
          <img className="" src={PM} style={{ width: "250px", height: "auto", marginTop: "-26px" }} alt="Logo da PMCE" />
        </div>
      </section>
    </div>
  );
};

export default TheftReport;
