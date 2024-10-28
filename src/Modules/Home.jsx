import React from 'react';
import eCommerce from '../img/e-commerce.jpg';

function Home() {
  return (
    <>
      <h1>Bem vindo a Loja</h1>
      <div>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, ab esse illo labore doloribus, exercitationem, nulla
          minima itaque neque vero tempore eos. Doloribus veniam ullam officia
          rerum quasi ad facilis?
        </span>
        <div>
          <img src={eCommerce} alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
