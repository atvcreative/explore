import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Intent, Spinner } from "@blueprintjs/core";

const button = <Button>Launch</Button>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {button}
      </header>
    </div>
  );
}

export default App;
