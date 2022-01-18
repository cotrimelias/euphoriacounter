import './App.css';
import Counter from './components/counter';
import React from 'react'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Counter />
        </p>
        <a
          className="App-link"
          href="https://play.hbomax.com/series/urn:hbo:series:GXKN_xQX5csPDwwEAAABj"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch on HBOMAX
        </a>
      </header>
    </div>
  );
}

export default App;
