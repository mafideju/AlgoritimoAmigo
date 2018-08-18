import React, { Component } from 'react';

class TestFive extends Component {
  state = {
    visibilidade: false
  };
  mostraSegredo = () => {
    this.setState({
      visibilidade: !this.state.visibilidade
    });
  };
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <div>
          {!this.state.visibilidade && (
            <button onClick={this.mostraSegredo}>Mostra o Segredo</button>
          )}
        </div>
        {this.state.visibilidade && (
          <div>
            <button onClick={this.mostraSegredo}>Esconde o Segredo</button>
            <p>Não vai ficar mais fácil. Então preciso ficar mais Forte.</p>
          </div>
        )}
      </div>
    );
  }
}
export default TestFive;
