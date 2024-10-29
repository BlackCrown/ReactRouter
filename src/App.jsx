import React from 'react';
import './App.css';
import Contato from './Modules/Contato';
import Produtos from './Modules/Produtos';
import Home from './Modules/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Modules/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="produtos" element={<Produtos />} />
        <Route path="contato" element={<Contato />} />
        <Route path="produtos/:id" element={<Produtos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
