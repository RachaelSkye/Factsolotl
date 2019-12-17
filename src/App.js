import React from 'react';
import Search from './containers/Search/Search';
import Nav from './components/navbar/navbar';
import './App.css';

class App extends React.Component {
  state = {
    startSearch: false
  }

 
  
  render() {
      return (
        <div className="App container">
        <div className='search'>
        <Search />
        </div>
        <div className="sliding-background"></div>
      </div>
      );
}
}

export default App;
