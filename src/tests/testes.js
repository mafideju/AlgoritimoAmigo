/*
let template = ( 
<div>
    <h1>Decide Por Mim, Caro Note</h1> 
    <ol>
        <li>Linha 1</li>
        <li>Linha 2</li>
    </ol>
</div>
);
let nome = 'Marcio Rodrigues';
let idade = 35;
let cidade = "São Bernardo do Campo";
let estado = 'São Paulo';

let challenge1 = (
    <div>
        <h1>Nome: {nome}</h1>
        <p>Idade: {idade} anos</p>
        <p>Cidade: {cidade}</p>
        <p>Estado: {estado}</p>
    </div>
);

let pessoa = {
    nome: 'Marcio',
    sobrenome: 'Mafideju',
    livro: 'One Flew Over The Cuckos Nest',
    autor: 'Ken Kesey',
    paginas: 150
}

pessoa = {
    sobrenome: 'Silva',
    livro: 'Pequeno Principe',
    autor: 'Dom Dom',
}
const paginacao = paginas => {
    if (paginas) {
        return <p>Páginas: {pessoa.paginas}</p> 
    }
}
let challenge2 = (
    <div>
        <h2>Livro Predileto</h2>
        <p>Nome: {pessoa.nome ? pessoa.nome : 'Indigão'}</p>
        <p>Sobrenome: {pessoa.sobrenome}</p>
        <p>Livro: {pessoa.livro}</p>
        <p>Autor: {pessoa.autor}</p>
        {paginacao(pessoa.paginas)}
    </div>
);

const appRoot = document.getElementById('app');
const challengeOne = document.getElementById('challengeOne');
const challengeTwo = document.getElementById('challengeTwo');
ReactDOM.render(template, appRoot);
ReactDOM.render(challenge1, challengeOne);
ReactDOM.render(challenge2, challengeTwo);
ReactDOM.render(challenge2, challengeThree);
*/
const livro = {
    titulo: 'Um Estranho no Ninho',
    autor: 'Ken Kesey',
    paginas: 385
}
const paginacao = paginas => {
    if (paginas) {
        return <h4>{livro.paginas}</h4>
    }
};
const livroReact = (
    <div>
        <h2>{livro.titulo}</h2>
        <h3>{livro.autor}</h3>
        {paginacao(livro.paginas)}
    </div>
);
const challenge3 = document.getElementById('challengeThree');
ReactDOM.render(livroReact, challengeThree);

// const name = "Mike Smith";
const firstName = name => name.split(' ')[0];
console.log(firstName('Mike Smith'));

const tabuada = {
    naturais: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    // tabuadaDo: 5,
    calcular(param) {
        return this.naturais.map(num => num * param)
    }
}
console.log(tabuada.calcular(7));