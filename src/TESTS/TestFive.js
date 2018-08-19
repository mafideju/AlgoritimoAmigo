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
          <button
            onClick={this.mostraSegredo}
            className="btn btn-outline-danger"
          >
            {!this.state.visibilidade
              ? 'Mostra o Segredo'
              : 'Esconde o Segredo'}
          </button>
          {this.state.visibilidade && (
            <h6 className="mt-3">
              Coragem, Coragem, se o que você quer é aquilo que pensa e faz,
              Coragem, Eu Sei Que Você Pode Mais.
            </h6>
          )}
        </div>
        {/*{!this.state.visibilidade && (
            <button onClick={this.mostraSegredo}>Mostra o Segredo</button>
          )}
        </div>
        {this.state.visibilidade && (
          <div>
            <button onClick={this.mostraSegredo}>Esconde o Segredo</button>
            <p>Não vai ficar mais fácil. Então preciso ficar mais Forte.</p>
          </div>
        )}*/}
      </div>
    );
  }
}
export default TestFive;
