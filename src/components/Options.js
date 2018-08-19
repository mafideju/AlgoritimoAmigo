import React, { Component } from 'react';

import Option from './Option';

class Options extends Component {
  render() {
    return (
      <div>
        <h4>Opções:</h4>{' '}
        {this.props.options.map(option => {
          return <Option key={option} optionText={option} />;
        })}
        <button onClick={this.props.handleDeleteOptions}>
          Remover Tarefas
        </button>
      </div>
    );
  }
}
export default Options;
