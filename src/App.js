
import React from 'react';
import './App.css';
import Search from './containers/search/search';
import Details from './containers/details/details';
import Nav from './components/navbar/navbar';


function App() {
  return (
    <div className="App">
       <div className="sliding-background"></div>
       <Nav/>
        <Details />
        
    </div>
  );
}

export default App;