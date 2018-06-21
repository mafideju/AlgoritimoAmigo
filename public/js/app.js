'use strict';

var destino = document.getElementById('app'); //lugar no html onde será renderizado o aplicativo

var aplicativo = {
    titulo: 'Algoritimo Amigo',
    subtitulo: 'Tá na Duvida? O Algoritimo Responde!',
    opcoes: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        aplicativo.opcoes.push(option);
        e.target.elements.option.value = '';
        renderAplicativo();
    }
};

var limparInput = function limparInput() {
    aplicativo.opcoes = [];
    // aplicativo.opcoes.length = '';
    renderAplicativo();
};

var decidaSe = function decidaSe() {
    var escolhaItem = Math.floor(Math.random() * aplicativo.opcoes.length);
    var opcao = aplicativo.opcoes[escolhaItem];
    console.log(escolhaItem + ' ' + opcao);
};

/*
const numeros = [];
for(var i = 1; i <= 10; i++){
    numeros.push(i)
}*/
var keys = [];
for (var i = 1; i < keys.length; i++) {
    keys.push(i);
}
var renderAplicativo = function renderAplicativo() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            aplicativo.titulo
        ),
        aplicativo.subtitulo && React.createElement(
            'p',
            null,
            aplicativo.subtitulo
        ),
        React.createElement(
            'p',
            null,
            aplicativo.opcoes.length > 0 ? 'Aqui estão sua opções' : 'Sem escolhas'
        ),
        React.createElement(
            'p',
            null,
            aplicativo.opcoes.length
        ),
        React.createElement(
            'button',
            { disabled: aplicativo.opcoes.length === 0, onClick: decidaSe },
            'Algoritimo Amigo'
        ),
        React.createElement(
            'button',
            { disabled: aplicativo.opcoes.length === 0, onClick: limparInput },
            'Limpar Tudo'
        ),
        React.createElement(
            'ol',
            null,

            // [
            //     numeros.map((num) => {
            //         return <li key={num}>Item {num}</li>;
            //     })
            // ]
            [aplicativo.opcoes.map(function (item, keys) {
                return React.createElement(
                    'li',
                    { key: keys },
                    'Item ',
                    item
                );
            })]
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Adicionar Op\xE7\xE3o'
            )
        )
    );
    ReactDOM.render(template, destino);
};

renderAplicativo();
