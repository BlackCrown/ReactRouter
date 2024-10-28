import React from 'react';
import foto from '../img/contato.jpg';

const Contato = () => {
  return (
    <>
      <h3>Contato</h3>
      <div style={{ maxWidth: '300px' }}>
        <img
          style={{ maxWidth: '100%' }}
          src={foto}
          alt="maquina de escrever"
        ></img>
        <div>
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
