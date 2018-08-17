import React, { Component } from 'react';

class TestTwo extends Component {
  render() {
    const getFirstName = name => name.split(' ')[0];
    const getLastName = name => name.split(' ')[1];
    return (
      <section>
        <div className="colaNaDireita">
          <p>Nome: {getFirstName('Marcio Rodrigues')}</p>
          <p>Sobrenome: {getLastName('Marcio Rodrigues')}</p>
        </div>
        <picture className="imagem">
          <img src="../assets/pn1.png" alt="" />
        </picture>
      </section>
    );
  }
}
export default TestTwo;
