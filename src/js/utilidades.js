console.log('teste')
import React from 'react';
import ReactDOM from 'react-dom';

export default class Header extends React.Component {
    render() {
        return  (
            <div>
                <h1>Titulo Estático</h1>
                <h2 className="green">Subtitulo Estático</h2>
            </div>
        );
    }
}