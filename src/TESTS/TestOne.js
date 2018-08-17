import React, { Component } from 'react';

class TestOne extends Component {
  state = {
    title: 'Algoritimo Amigo',
    subtitle: 'Deixe o Algoritimo decidir por você',
    options: [],
    numbers: [24, 48, 72, 96],
    input: ''
  };

  onFormSubmit = e => {
    const option = e.target.elements.option.value;
    if (option) {
      this.state.options.push(option);
      e.target.elements.option.value = '';
    }
    this.setState({
      input: option
    });
    e.preventDefault();
  };

  onRemoveAll = () => {
    this.setState({
      options: []
    });
  };

  render() {
    const { options, title, subtitle, input, numbers } = this.state;
    return (
      <div>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
        <br />
        {options.length > 0
          ? 'Essa são as suas opções'
          : 'Você não tem escolhas.'}
        <ol>
          {options.map(option => {
            return <li key={option}>{option}</li>;
          })}
        </ol>
        <button onClick={this.onRemoveAll}>Remover Todos</button>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="option" />
          <button>Adicionar</button>
        </form>
      </div>
    );
  }
}
export default TestOne;
