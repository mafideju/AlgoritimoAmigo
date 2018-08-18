import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TestZero from './TESTS/TestZero';
import TestOne from './TESTS/TestOne';
import TestTwo from './TESTS/TestTwo';
import TestThree from './TESTS/TestThree';
import TestFour from './TESTS/TestFour';
import TestFive from './TESTS/TestFive';

import './styles/main.scss';

class App extends Component {
  render() {
    return (
      <div>
        {/*
        <TestZero />
        <hr />
        <TestOne />
        <hr />
        <TestTwo />
        <hr />
        <TestThree />
        <hr />*/}
        <TestFour />
        <hr />
        <TestFive />
        <hr />
      </div>
    );
  }
}
export default App;
