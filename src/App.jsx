import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';
import TheftReport from './components/theftReport';
import Carrossel from './components/Carrossel';
import NewPage from './components/NewPage';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<TheftReport />} />
          <Route path="/carrossel" element={<Carrossel />} />
          <Route path="/nova-pagina" element={<NewPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
