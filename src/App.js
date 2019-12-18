import React from "react";
import Search from "./containers/Search/Search";
import "./App.css";

class App extends React.Component {
  state = {
    startSearch: false
  };

  render() {
    return (
      <div className="App">
        <div className="sliding-background"></div>
        <div className="search container">
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
