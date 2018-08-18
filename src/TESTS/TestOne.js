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

  onMakeDecision = () => {
    const random = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[random];
    console.log(option);
  };

  render() {
    const { options, title, subtitle, input, numbers } = this.state;
    return (
      <div>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
        <br />
        <h6>
          {options.length > 0
            ? 'Essa são as suas opções'
            : 'Você não tem escolhas.'}
        </h6>
        <ol>
          {options.map(option => {
            return <li key={option}>{option}</li>;
          })}
        </ol>
        <button
          className="btn btn-outline-secondary"
          onClick={this.onMakeDecision}
          disabled={options.length === 0}
        >
          O Que Fazer?
        </button>
        <button className="btn btn-outline-dark" onClick={this.onRemoveAll}>
          Remover Todos
        </button>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="option" />
          <button className="btn btn-outline-secondary">Adicionar</button>
        </form>
      </div>
    );
  }
}
export default TestOne;
