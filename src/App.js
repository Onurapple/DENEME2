import React from 'react';
import Card from './components/cards/Card';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import './App.css';
import data from './helper/Data';


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Card veri={data}/>
    </div>
  );
}

export default App;
