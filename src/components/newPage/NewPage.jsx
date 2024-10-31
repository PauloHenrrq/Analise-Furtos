// src/pages/NewPage.js
import React from 'react';
import './NewPage.css';

const aisData = [
  { id: 1, nome: "AIS 1", link: "https://site-oficial-ais1.com" },
  { id: 2, nome: "AIS 2", link: "https://site-oficial-ais2.com" },
  { id: 3, nome: "AIS 3", link: "https://site-oficial-ais3.com" },
  // Adicione mais AIS conforme necessário
];

const NewPage = () => {
  const handleGraficoClick = (aisId, graficoTipo) => {
    alert(`Exibindo gráfico ${graficoTipo} para ${aisId}`);
    // Aqui você pode adicionar a lógica para renderizar o gráfico específico
  };

  return (
    <div className="new-page-container">
      <h1>Tabela de Áreas Integradas de Segurança (AIS) de Fortaleza</h1>
      <table className="ais-table">
        <thead>
          <tr>
            <th>AIS</th>
            <th>Link Oficial</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {aisData.map((ais) => (
            <tr key={ais.id}>
              <td>{ais.nome}</td>
              <td>
                <a href={ais.link} target="_blank" rel="noopener noreferrer">
                  Visitar Site Oficial
                </a>
              </td>
              <td>
                <button
                  onClick={() => handleGraficoClick(ais.id, "Mapa de Calor")}
                  className="action-btn"
                >
                  Mapa de Calor
                </button>
                <button
                  onClick={() => handleGraficoClick(ais.id, "Distribuição")}
                  className="action-btn"
                >
                  Distribuição
                </button>
                <button
                  onClick={() => handleGraficoClick(ais.id, "Ocorrências")}
                  className="action-btn"
                >
                  Ocorrências
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewPage;
