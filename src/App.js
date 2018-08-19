import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import TestZero from './TESTS/TestZero';
// import TestOne from './TESTS/TestOne';
// import TestTwo from './TESTS/TestTwo';
// import TestThree from './TESTS/TestThree';
// import TestFour from './TESTS/TestFour';
// import TestFive from './TESTS/TestFive';

import Header from './components/Header';
import Action from './components/Action';
import Options from './components/Options';
import AddOption from './components/AddOption';

import './styles/main.scss';

class App extends Component {
  state = {
    options: ['Marta', 'Katia', 'Live', 'R.E.M']
  };

  handleDeleteOptions = () => {
    this.setState(() => {
      return {
        options: []
      };
    });
  };

  handlePick = () => {
    const random = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[random];
  };

  handleAddOption = option => {
    if (!option) {
      return 'Entre um Valor Válido !';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Esta Opção Já Foi Inserida';
    }
    this.setState(prevState => {
      return {
        options: prevState.options.concat(option)
      };
    });
  };

  render() {
    const title = 'Algoritimo Amigo';
    const subtitle = "Deixa Qu'eu Decido!";
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOption={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}
export default App;
