import React from 'react';
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/header.jsx';
import Footer from './components/footer/Footer.jsx';
import Rotas from './routes/Rotas';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <div className="content">
          <Rotas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
