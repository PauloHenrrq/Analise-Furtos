import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/footer/Footer';
import Rotas from './routes/Rotas';

const App = () => {
  return (
    <>
      <div className="app-container">
        <Header />
        <main className="content">
          <Rotas />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
