import React from 'react';
import Search from './containers/Search/Search';
import Nav from './components/navbar/navbar';
import './App.css';

class App extends React.Component {
  
  render() {
      return (
        <div className="App">
          <div className="sliding-background"></div>
          <Nav/>
          <div >
          <Search />
          </div>
        </div>
      );
}
}

export default App;
