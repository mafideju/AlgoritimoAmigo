import React, { Component } from 'react';

const Action = props => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOption}>
        O Que Fazer?
      </button>
    </div>
  );
};
export default Action;
