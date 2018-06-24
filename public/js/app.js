'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person() {
        var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Anonimo';
        var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        _classCallCheck(this, Person);

        this.nome = nome, this.idade = idade;
    }

    _createClass(Person, [{
        key: 'ola',
        value: function ola() {
            // return `Olá, eu sou ${this.nome} e tenho ${this.idade ? this.idade : 'nenhum'} anos de idade.`
            if (this.nome && this.idade) {
                return 'Ol\xE1, meu nome \xE9 ' + this.nome + ' e tenho ' + this.idade + ' de idade.';
            } else if (this.nome) {
                return 'Ol\xE1, meu nome \xE9 ' + this.nome + ' e minha idade \xE9 desconhecida.';
            } else if (this.idade) {
                return 'Ol\xE1, meu nome \xE9 ' + this.nome + ' e tenho ' + this.idade + ' de idade.';
            }
        }
    }]);

    return Person;
}();

var Students = function (_Person) {
    _inherits(Students, _Person);

    function Students(nome, idade, graduacao) {
        _classCallCheck(this, Students);

        var _this = _possibleConstructorReturn(this, (Students.__proto__ || Object.getPrototypeOf(Students)).call(this, nome, idade));

        _this.graduacao = graduacao;
        return _this;
    }

    _createClass(Students, [{
        key: 'graduado',
        value: function graduado() {
            return this.graduacao;
        }
    }, {
        key: 'ola',
        value: function ola() {
            var descricao = _get(Students.prototype.__proto__ || Object.getPrototypeOf(Students.prototype), 'ola', this).call(this);
            if (this.graduado()) {
                descricao += ' Sou formado em ' + this.graduacao + '.';
            } else {
                descricao += ' N\xE3o tenho forma\xE7\xE3o alguma.';
            }
            return descricao;
        }
    }]);

    return Students;
}(Person);

var Viagem = function (_Students) {
    _inherits(Viagem, _Students);

    function Viagem(nome, idade, graduacao, destino) {
        _classCallCheck(this, Viagem);

        var _this2 = _possibleConstructorReturn(this, (Viagem.__proto__ || Object.getPrototypeOf(Viagem)).call(this, nome, idade, graduacao));

        _this2.destino = destino;
        return _this2;
    }

    _createClass(Viagem, [{
        key: 'rumo',
        value: function rumo() {
            return this.destino;
        }
    }, {
        key: 'ola',
        value: function ola() {
            var trip = _get(Viagem.prototype.__proto__ || Object.getPrototypeOf(Viagem.prototype), 'ola', this).call(this);
            if (this.rumo()) {
                trip += ' Estou indo para ' + this.destino + '.';
            } else {
                trip += ' Vou ficar aqui mesmo.';
            }
            return trip;
        }
    }]);

    return Viagem;
}(Students);

var Meio = function (_Viagem) {
    _inherits(Meio, _Viagem);

    function Meio(nome, idade, graduacao, destino, transporte) {
        _classCallCheck(this, Meio);

        var _this3 = _possibleConstructorReturn(this, (Meio.__proto__ || Object.getPrototypeOf(Meio)).call(this, nome, idade, graduacao, destino));

        _this3.transporte = transporte;
        return _this3;
    }

    _createClass(Meio, [{
        key: 'cia',
        value: function cia() {
            return this.transporte;
        }
    }, {
        key: 'ola',
        value: function ola() {
            var como = _get(Meio.prototype.__proto__ || Object.getPrototypeOf(Meio.prototype), 'ola', this).call(this);
            if (this.cia()) {
                como += ' Vou de ' + this.transporte + '.';
            } else {
                como += ' N\xE3o vou nesta porra.';
            }
            return como;
        }
    }]);

    return Meio;
}(Viagem);

var Marcio = new Meio('Marcio', 35, 'JavaScript', 'Boston', 'trem');
var a = new Meio();
console.log(Marcio.ola());
console.log(a.ola());
