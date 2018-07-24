import React from 'react';
import './App.css';
import logo from './logo.svg';

const Header = props => {
  return (
    <div className="App-header">
      <span className="App-place-logo">
        <img src={logo} className="App-logo" alt="logo" />
      </span>
      <span className="App-place-title">
        <h1>Fahmi Ayil</h1>
      </span>
    </div>
  )
}

export default Header;
