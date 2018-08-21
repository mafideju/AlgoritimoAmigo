import React, { Component } from 'react';

import Option from './Option';

const Options = props => {
  return (
    <div>
      {props.options.length === 0 && <p>Adicione um Item para Começar</p>}
      <h4>Opções:</h4>{' '}
      {props.options.map(option => {
        return (
          <Option
            key={option}
            optionText={option}
            handleDeleteOne={props.handleDeleteOne}
          />
        );
      })}
      <button onClick={props.handleDeleteOptions}>Remover Tarefas</button>
    </div>
  );
};
export default Options;
