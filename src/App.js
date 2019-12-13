
import React from 'react';
import './App.css';
import Search from './containers/search/search';
import Nav from './components/navbar/navbar';
import { connect } from "react-redux";
import ViewControl from './containers/viewControl/viewControl';



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
          <ViewControl />
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

