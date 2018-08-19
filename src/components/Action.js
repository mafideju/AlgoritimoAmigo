import React, { Component } from 'react';

class Action extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOption}
        >
          O Que Fazer?
        </button>
      </div>
    );
  }
}
export default Action;
