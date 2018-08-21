import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import TestZero from './TESTS/TestZero';
// import TestOne from './TESTS/TestOne';
// import TestTwo from './TESTS/TestTwo';
// import TestThree from './TESTS/TestThree';
import TestFour from './TESTS/TestFour';
// import TestFive from './TESTS/TestFive';

import Header from './components/Header';
import Action from './components/Action';
import Options from './components/Options';
import AddOption from './components/AddOption';

import './styles/main.scss';

class App extends Component {
  state = {
    options: this.props.options
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (err) {
      alert(err);
    }

    console.log('fetching');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
    console.log('saving');
  }

  componentWillMount() {
    console.log('Vai montar');
  }

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
    alert(option);
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

  // DELETE BUTTON
  // DELETE FUNCTION
  handleDeleteOne = optionRemove => {
    this.setState(prevState => ({
      options: prevState.options.filter(option => {
        return optionRemove !== option;
      })
    }));
  };

  render() {
    console.warn('Rendeu');
    return (
      <div>
        <Header />
        <TestFour />
        <Action
          hasOption={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOne={this.handleDeleteOne}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}
App.defaultProps = {
  options: []
};
export default App;
