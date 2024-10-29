import React from 'react';
import eCommerce from '../img/e-commerce.jpg';
import styles from './Home.module.css';

function Home() {
  return (
    <>
      <section className={styles.container}>
        <h1 className={styles.titulo}>Bem vindo a Loja</h1>

        <span className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, ab esse illo labore doloribus, exercitationem, nulla
          minima itaque neque vero tempore eos. Doloribus veniam ullam officia
          rerum quasi ad facilis?
        </span>
        <div className={styles.img}>
          <img src={eCommerce} alt="" />
        </div>
      </section>
    </>
  );
}

export default Home;
