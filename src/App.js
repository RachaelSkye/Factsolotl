
import React from 'react';
import './App.css';
import Search from './containers/search/search';
import factsolotl from './img/factsolotl.png';


function App() {
  return (
    <div className="App">
       <div className="sliding-background"></div>
        <a href="https://www.scientificamerican.com/article/biologys-beloved-amphibian-the-axolotl-is-racing-toward-extinction1/" target="_blank"><img className="App-logo" src={factsolotl} alt="A pink cartoon axolotl"/></a>
        <header className="App-header">
          <Search />
        </header>
    </div>
  );
}

export default App;