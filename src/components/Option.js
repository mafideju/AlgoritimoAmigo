import React, { Component } from 'react';

class Option extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.optionText}</h2>
      </div>
    );
  }
}
export default Option;
