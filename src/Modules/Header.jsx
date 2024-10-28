import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      <h3>Loja Vava</h3>
      <nav>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="produtos">Produtos</NavLink>
        </li>
        <li>
          <NavLink to="contato">Contato</NavLink>
        </li>
      </nav>
    </div>
  );
}

export default Header;
