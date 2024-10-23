import React from 'react';
import './TheftReport.css'; // Certifique-se de que o arquivo TheftReport.css exista

const TheftReport = () => {
  return (
    <div className="theft-report-container">
      <header className="theft-report-header">
        <h1>Relatório de Furtos</h1>
        <nav className="theft-report-nav">
          <ul>
            {Array.from({ length: 10 }, (_, i) => (
              <li key={i}>
                <a href={`#grafico0${i + 1}`}>Furtos 0{i + 1}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="theft-report-main">
        {Array.from({ length: 10 }, (_, i) => (
          <section key={i} id={`grafico0${i + 1}`} className="theft-report-section">
            <h2>Gráfico de Furtos 0{i + 1}</h2>
            <div className="chart">Gráfico 0{i + 1} aqui</div>
          </section>
        ))}
      </main>

      <footer className="theft-report-footer">
        <p>&copy; 2024 Relatório de Furtos - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default TheftReport;
