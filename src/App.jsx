import React from 'react';
import TheftReport from './components/theftReport/TheftReport';
import Header from './components/header/header';
import './App.css';
import Carrossel from './components/carousel/Carousel';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div>
      <Header />
      <TheftReport />
      <Carrossel />
      <Footer />
    </div>
  );
};

export default App;