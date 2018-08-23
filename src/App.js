import React, { Component } from 'react';

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
import OptionModal from './components/OptionModal';

import './index.scss';

class App extends Component {
  state = {
    options: this.props.options,
    selectedOption: undefined
  };

  handleModalClose = () => {
    this.setState(() => {
      return {
        selectedOption: undefined
      };
    });
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
    this.setState(() => {
      return {
        selectedOption: option
      };
    });
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

  // LIFECICLE METHODS

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

  render() {
    console.warn('Rendeu');
    return (
      <div className="backdrop">
        <Header />
        <div className="container">
          <Action
            hasOption={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOne={this.handleDeleteOne}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleModalClose={this.handleModalClose}
        />
      </div>
    );
  }
}
App.defaultProps = {
  options: []
};
export default App;
