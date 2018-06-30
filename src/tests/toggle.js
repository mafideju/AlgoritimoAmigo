// const destino = document.getElementById('app'); //lugar no html onde será renderizado o aplicativo

// const esconde = () => {
//     <button>Esconde</button>;
//     console.log('Funcionou')
//     render();
// }
// const mostra = () => {
//     <button onClick={esconde}>Mostra</button>;
//     render();
// }

/*
let vis = false;

const ligaDesliga = () => {
    vis = !vis;   
    render();
}

const render = () => {
    const toggle = (
    <div>
        <h2>Toggle Visibility</h2>
        <button onClick={ligaDesliga}>{vis ? 'Esconde' : 'Mostra o Texto de..'}</button> 
        {vis && (<div>
                    <h1>Texto de merda</h1>
                </div>)}
    </div>
    );
ReactDOM.render(toggle, destino);
};
render();

*/

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.ligaDesliga = this.ligaDesliga.bind(this);
        this.state = {
          visivel: true
        };
    } 
    ligaDesliga() {
        this.setState((prevState) => {
            return {
                visivel: !prevState.visivel
            };
        });
    }
    render() {
        return (
            <div>
                <h2>Liga e Desliga</h2>
                <button onClick={this.ligaDesliga}>
                    {this.state.visivel ? 'Esconde' : 'Mostra o Texto de..'}
                </button> 
                {this.state.visivel && (
                    <div>
                        <h1>Texto Oculto</h1>
                    </div>
                )}
            </div>
            );
        }
}
ReactDOM.render(<Toggle />, document.getElementById('app'));