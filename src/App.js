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
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}
export default App;
