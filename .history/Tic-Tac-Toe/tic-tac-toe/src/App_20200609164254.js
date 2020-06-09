import React from 'react';
import './App.css';
import Game from '../src/Components/Game/Game';

function App() {
  return (
    <div>
      <header className="Header">
        <h1>Blind Tx3</h1>
      </header>
      <div className="App">
        <Game />
      </div>
    </div>
    
  );
}

export default App;
