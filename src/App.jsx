import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Rotas from './routes/Rotas';
import Header from './components/header/Header';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main className="content">
          <Rotas />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
