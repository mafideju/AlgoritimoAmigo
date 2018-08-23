import React, { Component } from 'react';

import Option from './Option';

const Options = props => {
  return (
    <div>
      <div className="widget__header">
        <h3 className="widget__header--title">Opções</h3>{' '}
        <button
          onClick={props.handleDeleteOptions}
          className="button button--link"
        >
          Limpar Lista
        </button>
      </div>

      {props.options.length === 0 && (
        <p className="widget__content">Adicione um Item para Começar</p>
      )}
      {props.options.map((option, index) => {
        return (
          <Option
            key={option}
            count={index + 1}
            optionText={option}
            handleDeleteOne={props.handleDeleteOne}
          />
        );
      })}
    </div>
  );
};
export default Options;
