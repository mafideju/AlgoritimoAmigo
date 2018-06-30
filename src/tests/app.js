const destino = document.getElementById('app'); //lugar no html onde será renderizado o aplicativo

const aplicativo = {
    titulo: 'Algoritimo Amigo',
    subtitulo: 'Tá na Duvida? O Algoritimo Responde!',
    opcoes: []
};

const onFormSubmit = e => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option){
        aplicativo.opcoes.push(option);
        e.target.elements.option.value = '';
        renderAplicativo();
    }
};

const limparInput = () => {
    aplicativo.opcoes = [];
    // aplicativo.opcoes.length = '';
    renderAplicativo(); 
};

const decidaSe = () => {
    const escolhaItem = Math.floor(Math.random() * aplicativo.opcoes.length);
    const opcao = aplicativo.opcoes[escolhaItem];
    console.log(escolhaItem + ' ' + opcao);
};

/*
const numeros = [];
for(var i = 1; i <= 10; i++){
    numeros.push(i)
}*/
const keys = [];
for (let i = 1; i < keys.length; i++) {
    keys.push(i);
}
const renderAplicativo = () => {
    const template = ( 
    <div>
        <h1>{aplicativo.titulo}</h1>
        {aplicativo.subtitulo && <p>{aplicativo.subtitulo}</p>}
        <p>{aplicativo.opcoes.length > 0 ? 'Aqui estão sua opções' : 'Sem escolhas'}</p>
        <p>{aplicativo.opcoes.length}</p>
        <button disabled={aplicativo.opcoes.length === 0} onClick={decidaSe}>Algoritimo Amigo</button>
        <button disabled={aplicativo.opcoes.length === 0} onClick={limparInput}>Limpar Tudo</button>
        <ol>
        {
            // [
            //     numeros.map((num) => {
            //         return <li key={num}>Item {num}</li>;
            //     })
            // ]
            [
                aplicativo.opcoes.map((item, keys) => {
                    return <li key={keys}>Item {item}</li>;
                }),
            ]
        }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>Adicionar Opção</button>
        </form>
    </div>
);
    ReactDOM.render(template, destino);
};

renderAplicativo();