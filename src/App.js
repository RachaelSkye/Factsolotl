
import React from 'react';
import './App.css';
import Search from './containers/search/search';
import factsolotl from './img/factsolotl.png';

function App() {
  return (
    <div className="App">
      <div className="bubbles">

        <img src={factsolotl} alt="A pink cartoon axolotl"/>

        <header className="App-header">
          <Search />
        </header>
      </div>
    </div>
  );
}

export default App;