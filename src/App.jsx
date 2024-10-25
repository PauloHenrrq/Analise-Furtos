import React from 'react';
import TheftReport from './components/theftReport/TheftReport';
import Header from './components/header/header';
import './App.css';


const App = () => {
  return (
    <div>
      <Header />
      <TheftReport />
    </div>
  );
};

export default App;