import React, { Component } from 'react';

const Option = props => {
  return (
    <div>
      {props.optionText}
      <button
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
