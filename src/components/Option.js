import React, { Component } from 'react';

const Option = props => {
  return (
    <div className="option">
      <p className="option__text">
        {props.count}. {props.optionText}
      </p>

      <button
        className="button button--link"
        onClick={() => {
          props.handleDeleteOne(props.optionText);
        }}
      >
        X
      </button>
    </div>
  );
};

export default Option;
