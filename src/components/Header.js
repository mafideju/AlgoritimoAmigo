import React, { Component } from 'react';

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h3>{props.subtitle}</h3>}
    </div>
  );
};
Header.defaultProps = {
  title: 'Algoritimo Mandão',
  subtitle: "Deixa Qu'eu Decido!!"
};
export default Header;
