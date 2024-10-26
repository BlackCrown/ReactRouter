import React from 'react';
import Contato from './Contato';
import Produtos from './Produtos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

function App() {
  return (
    <BrowserRouter>
      <h1>Router 1</h1>
      <Routes>
        <Route path="contato" element={<Contato />} />
        <Route path="produtos/:id/*" element={<Produtos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
