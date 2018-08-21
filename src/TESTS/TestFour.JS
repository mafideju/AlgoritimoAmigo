import React, { Component } from 'react';

class TestFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
    this.addOne = this.addOne.bind(this);
    this.zeroTo = this.zeroTo.bind(this);
    this.minusOne = this.minusOne.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    const json = JSON.stringify(this.state.contador);
    localStorage.setItem('contador', json);
  }

  componentDidMount() {
    const json = localStorage.getItem('contador');
    const contador = JSON.parse(json);
    this.setState(() => ({ contador }));
  }

  addOne() {
    this.setState({
      contador: this.state.contador + 1
    });
  }

  zeroTo() {
    this.setState({
      contador: 0
    });
  }

  minusOne() {
    this.setState({
      contador: this.state.contador - 1
    });
  }

  render() {
    return (
      <div className="contador">
        <h1>Contador: {this.state.contador}</h1>
        <div className="btn-group">
          <button className="btn-danger" onClick={this.addOne}>
            + 1
          </button>
          <button className="btn-warning text-white" onClick={this.zeroTo}>
            Zerar
          </button>
          <button className="btn-success" onClick={this.minusOne}>
            - 1
          </button>
        </div>
      </div>
    );
  }
}
export default TestFour;
