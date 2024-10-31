import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/Footer/Footer';
import TheftReport from './components/theftReport/TheftReport';
import Carrossel from './components/carousel/Carousel';
import graficoAIS from './components/graficoAIS/graficoAis';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<TheftReport />} />
            <Route path="/carrossel" element={<Carrossel />} />
            <Route path="/nova-pagina" element={<graficoAIS />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
