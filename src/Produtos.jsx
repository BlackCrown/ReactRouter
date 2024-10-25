// import { data } from '@remix-run/router';
import React from 'react';
import styles from '../public/Produtos.module.css';
// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

const Produtos = () => {
  const [produtos, setProdutos] = React.useState([]);

  function handleClick({ target }) {
    console.log(target.id);
  }

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((response) => response.json())
      .then((data) => setProdutos(data));
  }, []);

  return (
    <div>
      <h1>Produtos</h1>
      <div className={styles.container}>
        {produtos.map(({ fotos, nome, id }) => (
          <div className={styles.produto} key={id}>
            <img
              className={styles.img}
              id={id}
              onClick={handleClick}
              src={fotos[0].src}
            ></img>
            <h3>{nome}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produtos;
