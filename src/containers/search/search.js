import React from "react";
import Results from "../../components/results/results";
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

class Search extends React.Component {
  _onSubmit(e, id) {
    e.preventDefault();
    this.props.onEnterZip(id)
  }
  render() {
      return (
        <div>
          <form onSubmit={(id) => this._onSubmit(id)}>
            <input 
            type="text" 
            placeholder="enter zip code"
            id= 'input' />
            <button type="submit">SEARCH</button>
          </form>
          <p>for demo purposes the zip code is 00000</p>
          <h1>
            Results:
          </h1>
          <Results />
        </div>
      );
    
  }
}



const mapDispatchToProps = dispatch => {
  return {

      onEnterZip: (id) => dispatch({
              type: actionTypes.SUBMIT_ZIP,
              input: id
          }),
  }
}

export default connect(null, mapDispatchToProps)(Search);
