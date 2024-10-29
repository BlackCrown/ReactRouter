import React from 'react';
import styles from './Contato.module.css';
import foto from '../img/contato.jpg';

const Contato = () => {
  return (
    <>
      <div className={styles.container}>
        <h3 className={styles.titulo}>Contato</h3>
        <div className={styles.img}>
          <img src={foto} alt="maquina de escrever"></img>
        </div>
        <div className={styles.content}>
          <h2>Entre em contato!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
            nobis. Commodi, reprehenderit enim? Quidem, deleniti accusantium
            accusamus unde fugiat incidunt voluptatum ipsum quos error beatae
            voluptas officiis nihil praesentium voluptatibus.
          </p>
        </div>
      </div>
    </>
  );
};

export default Contato;
