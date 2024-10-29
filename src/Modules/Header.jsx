import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.nav}>
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
