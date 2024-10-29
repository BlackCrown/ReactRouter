// import { data } from '@remix-run/router';
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import styles from './Produtos.module.css';
// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

const Produtos = () => {
  const [produtos, setProdutos] = React.useState([]);
  const [produto, setProduto] = React.useState([]);
  const location = useLocation();
  // const params = useParams();

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((response) => response.json())
      .then((data) => setProdutos(data));
  });

  function handleClick({ currentTarget }) {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${currentTarget.id}`)
      .then((response) => response.json())
      .then((data) => setProduto(data));
    console.log(currentTarget.id);
  }

  if (location.pathname === '/produtos') {
    return (
      <div>
        <h3 className={styles.titulo}>Produtos</h3>
        <div className={styles.container}>
          {produtos.map(({ fotos, nome, id }) => (
            <div key={id} id={id} onClick={handleClick}>
              <Link className={styles.link} to={id}>
                <div className={styles.produtos}>
                  <div className={styles.img}>
                    <img src={fotos[0].src}></img>
                  </div>
                  <h3>{nome}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  } else if (produto.length !== 0) {
    return (
      <div>
        <div className={styles.produtoContainer}>
          <h3 className={styles.produtoNome}>{produto.nome}</h3>
          <div className={styles.img}>
            <img id={produto.id} src={produto.fotos[0].src} />
          </div>
          <p className={styles.descricao}>{produto.descricao}</p>
          <span className={styles.precoCompra}>{'R$ ' + produto.preco}</span>
          <button className={styles.btn}>Comprar</button>
        </div>
      </div>
    );
  }
};

export default Produtos;
