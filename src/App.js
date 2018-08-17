import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TestOne from './TESTS/TestOne';
import TestTwo from './TESTS/TestTwo';
import TestThree from './TESTS/TestThree';
import TestFour from './TESTS/TestFour';

import './styles/main.scss';

class App extends Component {
  render() {
    const user = {
      name: 'Marcio Mafideju',
      age: '35',
      city: 'São Bernardo do Campo'
    };
    const user1 = {
      name: '',
      age: '',
      city: ''
    };
    const getLocation = city => {
      if (city) {
        return city;
      } else {
        return 'Ao Relento';
      }
    };
    return (
      <div>
        <h1>Nome: {user.name ? user.name : 'Desconhecido'}</h1>
        <p>Idade: {user.age ? user.age : 'Idade Ignorada'}</p>
        <p>Local: {getLocation(user.city)}</p>
        <hr />
        <h1>Nome: {user1.name ? user1.name : 'Desconhecido'}</h1>
        <p>Idade: {user1.age ? user1.age : 'Idade Ignorada'}</p>
        <p>Local: {getLocation(user1.city)}</p>
        <hr />
        <h1>Nome: {user.name ? user.name : 'Desconhecido'}</h1>
        {user.age && <p>Idade: {user.age}</p>}
        <p>Local: {getLocation(user.city)}</p>
        <hr />
        <TestOne />
        <hr />
        <TestTwo />
        <hr />
        <TestThree />
        <hr />
        <TestFour />
        <hr />
      </div>
    );
  }
}
export default App;
