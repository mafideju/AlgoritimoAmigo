import React, { Component } from 'react';

class AddOption extends Component {
  state = {
    error: undefined
  };

  handleAddOption = e => {
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error }));
    if (!error) {
      e.target.elements.option.value = '';
    }
    e.preventDefault();
  };

  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button">Adicionar</button>
        </form>
      </div>
    );
  }
}
export default AddOption;
