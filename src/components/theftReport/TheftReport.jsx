import React from 'react';
import './TheftReport.css'; // Verifique o caminho correto do arquivo CSS

const TheftReport = () => {
  return (
    <div className="theft-report-container">

      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="subtitle">RELATÓRIO DE FURTOS<br /> EM FORTALEZA</h1>
            <p>
              Este é o sistema oficial de relatórios de furtos em fortaleza.<br />
              Aqui você pode encontrar estatísticas detalhadas e relatórios sobre os casos registrados.
            </p>
            <a href="#grafico02" className="btn-schedule">VER RELATÓRIOS</a>
          </div>
        </div>
      </section>

      <main className="theft-report-main">
        <section id="grafico01">
          <h2>Estatísticas de Furtos</h2>
          <div className="chart">Gráfico de Furtos aqui</div>
        </section>
        <section id="grafico02">
          <h2>Relatórios de Furtos</h2>
          <div className="chart">Outro gráfico aqui</div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Relatório de Furtos - Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default TheftReport;
