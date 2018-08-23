import React, { Component } from 'react';

const Header = props => {
  return (
    <React.Fragment>
      <div className="header">
        <div className="container">
          <h1 className="header__title">{props.title}</h1>
          {props.subtitle && (
            <h3 className="header__subtitle">{props.subtitle}</h3>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};
Header.defaultProps = {
  title: 'Algoritimo Amigo',
  subtitle: "Deixa Qu'eu Decido!!"
};
export default Header;
