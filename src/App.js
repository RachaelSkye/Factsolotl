import React from "react";
import Search from "./containers/Search/Search";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="sliding-background"></div>
          <div className="search container">
            <Search />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
