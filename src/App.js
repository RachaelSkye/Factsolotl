import React from "react";
import Search from "./containers/Search/search";
import Nav from './containers/navbar/navbar'
import "./App.css";
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="sliding-background"></div>
          <div className="search container">
            <Nav/>
            <Search />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
