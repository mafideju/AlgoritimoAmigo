class IndecisionApp extends React.Component {
    constructor (props) {
        super(props);
        this.deleteOptions = this.deleteOptions.bind(this);
        this.escolha = this.escolha.bind(this);
        this.adicionar = this.adicionar.bind(this);
        this.state = {
            options: []
        };
    }
    deleteOptions(){
        this.setState(() => {
            return {
                options: []
            };
        });
    }
    escolha(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
    }
    //handleAddOption
    adicionar(option){
        if(!option){
            return 'Entre uma Ação para Inserir na Lista';
        } else if (this.state.options.indexOf(option) > -1){
            return 'Esta Opção Já Foi Inserida';
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            };
        });
    }
    render() {
        const title = 'Algoritimo Amigo';
        const subtitle = 'Deixe que o Algoritimo Amigo decida por você !!!';

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action hasOptions={this.state.options.length > 0}
                        escolha={this.escolha}
                />
                <Options
                    options={this.state.options}
                    deleteOptions={this.deleteOptions}
                />
                <AddOptions 
                    adicionar={this.adicionar}
                />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return  (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>);
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button 
                onClick={
                    this.props.escolha
                }
                disabled={
                    !this.props.hasOptions
                }                 
                >O Que Fazer?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.deleteOptions}>Remover Tarefas</button>
                {this.props.options.map((option) => <Option key={option} optionText={option} />)}
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Garota: {this.props.optionText}
            </div>
        );
    }
}

class AddOptions extends React.Component {
    constructor(props){
        super(props);
        this.adicionar = this.adicionar.bind(this);
        this.state = {
            error: undefined
        };
    }
    adicionar(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.adicionar(option);

        this.setState(() => {
            return {error};
        });
    }
    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
             <form onSubmit={this.adicionar}>
                <input type="text" name="option" />
                <button>Adicionar Tarefa</button>   
             </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));