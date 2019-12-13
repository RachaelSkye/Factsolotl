
import React from 'react';
import './App.css';
import Search from './containers/search/search';
import Details from './containers/details/details';
import List from './containers/List/List';
import Nav from './components/navbar/navbar';
import { connect } from "react-redux";



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
          <Details />
          <div className='footer'>
          <Search />
          </div>
        </div>
      );
    } else if (this.props.queried && !this.props.schoolQuery) {
      return (
        <div className="App">
          <div className="sliding-background"></div>
          <Nav/>
          <List />
          <div className='footer'>
          <Search />
          </div>
        </div>
      );
    } 
  }
}
  


const mapStateToProps = state => {
  return {
    schoolQuery: state.schoolQuery,
    queried: state.queried
  };
};

export default connect(mapStateToProps)(App);

