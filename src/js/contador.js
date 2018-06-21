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
