class Person {
    constructor(nome = 'Anonimo', idade = 0) {
        this.nome = nome,
        this.idade = idade
    }
    ola() {
       // return `Olá, eu sou ${this.nome} e tenho ${this.idade ? this.idade : 'nenhum'} anos de idade.`
       if (this.nome && this.idade) {
            return `Olá, meu nome é ${this.nome} e tenho ${this.idade} de idade.`
       } else if (this.nome) {
            return `Olá, meu nome é ${this.nome} e minha idade é desconhecida.`
       } else if (this.idade) {
            return `Olá, meu nome é ${this.nome} e tenho ${this.idade} de idade.`
       }
    }
}

class Students extends Person {
    constructor(nome, idade, graduacao){
        super(nome, idade);
        this.graduacao = graduacao;
    }
    graduado(){
        return this.graduacao;
    }
    ola(){
        let descricao = super.ola();
        if (this.graduado()) {
            descricao += ` Sou formado em ${this.graduacao}.`;
        } else {
            descricao += ` Não tenho formação alguma.`
        }
        return descricao;
    }
}

class Viagem extends Students {
    constructor(nome, idade, graduacao, destino) {
        super(nome, idade, graduacao);
        this.destino = destino;
    }
    rumo(){
        return this.destino;
    }
    ola(){
        let trip = super.ola();
        if (this.rumo()) {
            trip += ` Estou indo para ${this.destino}.`;
        } else {
            trip += ` Vou ficar aqui mesmo.`
        }
        return trip;
    }
}

class Meio extends Viagem {
    constructor(nome, idade, graduacao, destino, transporte) {
        super(nome, idade, graduacao, destino);
        this.transporte = transporte;
    }
    cia(){
        return this.transporte;
    }
    ola() {
        let como = super.ola();
        if (this.cia()) {
            como += ` Vou de ${this.transporte}.`
        } else {
            como += ` Não vou nesta porra.`
        }
        return como;
    }
}

const Marcio = new Meio('Marcio', 35, 'JavaScript', 'Boston', 'trem');
const a = new Meio();
console.log(Marcio.ola())
console.log(a.ola())