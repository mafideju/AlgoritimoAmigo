/*
let contador = 0;
const maisUm = () => {
    contador += 1;
    contaRender();
}
const menosUm = () => {
    contador -= 1;
    contaRender();
}
const zeraTudo = () => {
    contador = 0;
    contaRender();
}

const aplicativo = document.getElementById('app');
const contaRender = () => { 
    const template = (
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={maisUm}>+1</button>
            <button onClick={zeraTudo}>Zerar Contador</button>
            <button onClick={menosUm}>-1</button>
        </div>
    );

ReactDOM.render(template, aplicativo);
};
contaRender();
*/


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            contador: 0
        };
    }
    addOne() {
        this.setState((prevState) => {
            return {
                contador: prevState.contador + 1
            }
        });
    }
    minusOne() {
        this.setState((prevState) => {
            return {
                contador: prevState.contador - 1
            }
        });
    }
    reset() {
        this.setState(() => {
            return {
                contador: 0
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Contador: {this.state.contador}</h1>
                <button onClick={this.addOne}>+ 1</button>
                <button onClick={this.reset}>Zerar</button>
                <button onClick={this.minusOne}>- 1</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));