import React from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import * as classes from "./search.module.css";

class Search extends React.Component {
  submitForm(event) {
    event.preventDefault();
    if(this.props.schoolQuery) {
      this.props.setSchool(event)
      this.props.onSchoolQuery(event)      
    } else {
      // this.props.setCounty(event)
      // this.props.onCountyQuery(event)
      alert('The county search is currently undergoing maintenance.');
    }  
  }

  render() {
    const toggleSchool = this.props.schoolQuery ? classes.toggleSchool : classes.toggleCounty
    const toggleCounty = this.props.schoolQuery ? classes.toggleCounty : classes.toggleSchool
    const title = this.props.schoolQuery ? 'Search by school' : 'Search by county'

    return (
      <div className='footer'>
            <div className="card white">
              <div className="card-content grey-text">
                <span className="card-title">{title}</span>
                <form onSubmit={event => this.submitForm(event)}>
                  <input
                    type="text"
                    placeholder="Search..."
                    // onChange={e => this.props.setQueryState(e)}
                    id="query"
                    ref={input => {
                      this.query = input;
                    }}
                  />

                  <div className="card-action">
                    <div className="switch">
                      <label>
                        <span onClick={this.props.onToggleQuery} className={toggleSchool}>School</span>
                        <span onClick={this.props.onToggleQuery} className={toggleCounty}>County</span>
                      </label>
                      <button
                        id='search'
                        className="btn waves-effect waves-light grey"
                        type="submit">
                        <i className="large material-icons prefix">search</i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
         
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    schoolQuery: state.schoolQuery,
    queried: state.queried
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSchoolQuery: event =>
      dispatch({
        type: actionTypes.SUBMIT_SCHOOL_QUERY,
        query: event.target.query.value
      }),
    onCountyQuery: event =>
      dispatch({
        type: actionTypes.SUBMIT_COUNTY_QUERY,
        query: event.target.query.value
      }),
      onToggleQuery: () =>
      dispatch({
        type: actionTypes.TOGGLE_QUERY_TYPE,
      }),
      setSchool: (event) =>
      dispatch({
        type: actionTypes.SET_SCHOOL_QUERY,
        query: event.target.query.value

      }),
      setCounty: (event) =>
      dispatch({
        type: actionTypes.SET_COUNTY_QUERY,
        query: event.target.query.value

      }),
      // setQueryState: (event) =>
      // dispatch({
      //   type: actionTypes.SET_COUNTY_QUERY,
      //   query: event.target.query.value
      // })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
