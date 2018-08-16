import '../styles/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './utilidades'

class Template extends React.Component {
    render() {
        return (
        <div>
            <h1 className="green">Isto é um JSX.</h1>
        </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Template />
                <Header />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));