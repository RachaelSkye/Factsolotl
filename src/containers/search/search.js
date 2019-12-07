import React from "react";
import Results from "../../components/results/results";
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

class Search extends React.Component {
  submitZip(event) {
    event.preventDefault();
    this.props.onEnterZip(event)
  }
  render() {
      return (
        <div>
          <form onSubmit={(event) => this.submitZip(event)}>
            <input 
            type="text" 
            placeholder="enter zip code"
            id= 'zip'
            ref={(input) => {this.zip = input;}} />
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

// const mapStateToProps = state => {
//   return {
//       zip: state.zip,
//   }
// }

const mapDispatchToProps = dispatch => {
  return {
      onEnterZip: (event) => dispatch({
              type: actionTypes.SUBMIT_ZIP,
              zip: event.target.zip.value
          }),
  }
}

export default connect(null, mapDispatchToProps)(Search);
