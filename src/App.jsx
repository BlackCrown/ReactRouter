import React from 'react';
import Contato from './Modules/Contato';
import Produtos from './Modules/Produtos';
import ProdutoDescricao from './Modules/ProdutoDescricao';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Modules/Header';

// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="produtos" element={<Produtos />} />
        <Route path="contato" element={<Contato />} />
        <Route path="produtos/:id" element={<Produtos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
