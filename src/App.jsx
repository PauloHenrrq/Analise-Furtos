import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Rotas from './routes/Rotas';
import Header from './components/head/Head';

const App = () => {
  return (
    <BrowserRouter future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}>
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
