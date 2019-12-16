import React from 'react';
import Search from './containers/Search/Search';
import Nav from './components/navbar/navbar';
import './App.css';

class App extends React.Component {
  
  render() {
      return (
        <div className="App">
          <Nav/>
          <div className='search'>
          <Search />
          </div>
          <div className="sliding-background"></div>
        </div>
      );
}
}

export default App;
