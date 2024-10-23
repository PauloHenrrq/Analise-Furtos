import React from 'react';
import './TheftReport.css'; // Certifique-se de criar um arquivo styles.css

const TheftReport = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Relatório de Furtos</h1>
        <nav className="nav">
          <ul>
            <li><a href="#grafico01">Furtos 01</a></li>
            <li><a href="#grafico02">Furtos 02</a></li>
            <li><a href="#grafico03">Furtos 03</a></li>
            <li><a href="#grafico04">Furtos 04</a></li>
            <li><a href="#grafico05">Furtos 05</a></li>
            <li><a href="#grafico06">Furtos 06</a></li>
            <li><a href="#grafico07">Furtos 07</a></li>
            <li><a href="#grafico08">Furtos 08</a></li>
            <li><a href="#grafico09">Furtos 09</a></li>
            <li><a href="#grafico10">Furtos 10</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="grafico01">
          <h2>Gráfico de Furtos 01</h2>
          {/* Espaço reservado para o Gráfico */}
          <div className="chart">Gráfico 01 aqui</div>
        </section>
        <section id="grafico02">
          <h2>Gráfico de Furtos 02</h2>
          {/* Espaço reservado para o Gráfico */}
          <div className="chart">Gráfico 02 aqui</div>
        </section>
        {/* Adicione mais seções para os outros gráficos */}
      </main>

      <footer className="footer">
        <p>&copy; 2024 Relatório de Furtos - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default TheftReport;
