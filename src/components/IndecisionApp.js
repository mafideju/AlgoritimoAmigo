import React, { Component } from 'react';

import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';

class IndecisionApp extends Component {
  state = {
    options: this.props.options
  };

  // PEGAR DO CACHE E COLOCAR NO STATE
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

  // COLOCAR NO CACHE
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
IndecisionApp.defaultProps = {
  options: []
};

export default IndecisionApp;
