import React from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import "./search.css";

class Search extends React.Component {
  submitForm(event) {
    event.preventDefault();
    this.props.onQuery(event);
  }
  render() {
    return (
      <div >
        <form onSubmit={event => this.submitForm(event)}>
          <div className="search">
          <button
            className="btn-floating btn-small waves-effect waves-light red lighten-1"
            type="submit"
          >
            <i className="large material-icons prefix">search</i>
          </button>
          <input
            type="text"
            placeholder="enter school name"
            id="query"
            ref={input => {
              this.query = input;
            }}
          />
              
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onQuery: event =>
      dispatch({
        type: actionTypes.SUBMIT_QUERY,
        query: event.target.query.value
      })
  };
};

export default connect(null, mapDispatchToProps)(Search);
