import React from 'react';
import Search from './containers/Search/Search';
import Nav from './components/navbar/navbar';
import './App.css';

class App extends React.Component {
  
  render() {
    if(!this.props.queried){
      return (
        <div className="App">
          <div className="sliding-background"></div>
          <Nav/>
          <div className='footer'>
          <Search />
          </div>
        </div>
      );
    } else if (this.props.queried && this.props.schoolQuery) {
      return (
        <div className="App">
          <div className="sliding-background"></div>
          <Nav/>
          {/* <ViewControl /> */}
          <div className='footer'>
          <Search />
          </div>
        </div>
      );
    }  
  }
}

export default App;
