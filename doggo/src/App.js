import React from 'react';
// import logo from './logo.svg';
import logo from './StainedGlass.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Dan Gealow's Webpage</h1>
      <h3>(A work in progress)</h3>
      <h2>Praise the Sun!</h2>
      <img src={logo} className="App-logo" alt="logo" />
      { /*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        */ }
    </div>
  );
}

export default App;
