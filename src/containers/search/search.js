import React, { Component } from "react";
import axios from "axios";
import { v4 } from "uuid";
import List from "../List/List";
import Details from "../../components/Details/Details";
import "./Search.module.css";
import * as classes from "./Search.module.css";
import "./Search.module.css";
import Splash from "../Splash/Splash";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

class Search extends Component {
  state = {
    schools: [],
    selectedschoolId: "",
    error: false,
    loadedSchool: null,
    query1: "",
    query2: "",
    query3: "",
    exceedance: false,
    exceedanceCheck: false,
    total: 0,
  };

  queryHandler(state) {
    let baseQuery =
      "https://data.ca.gov/api/3/action/datastore_search?resource_id=5ebb2d68-1186-4937-acaf-8564c9a01ed6&q=" +
      this.state.query1 +
      ", " +
      this.state.query2 +
      ", " +
      this.state.query3;

    let exceedanceQuery = baseQuery + ", yes";

    if (
      this.state.query1 === "" &&
      this.state.query2 === "" &&
      this.state.query3 === ""
    ) {
      alert("Please select a year or enter an input in one of the search fields.");
    } else if (!this.state.exceedance) {
      axios
        .get(baseQuery)
        .then(response => {
          let schools = response.data.result.records;
          const total = response.data.result.total;

          if (schools.length === 0) {
            alert("No schools matched this search");
          }
          const newSchool = schools.map(school => {
            return {
              ...school,
              id: v4()
            };
          });
          this.setState({
            ...state,
            schools: newSchool,
            queried: true,
            total: total
          });
        })
        .catch(error => {
          this.setState({ error: true });
        });
    } else if (this.state.exceedance) {
      axios
        .get(exceedanceQuery)
        .then(response => {
          let schools = response.data.result.records;
          const total = response.data.result.total;

          if (schools.length === 0) {
            alert("No schools matched this search");
          }
          const newSchool = schools.map(school => {
            return {
              ...school,
              id: v4()
            };
          });
          this.setState({
            ...state,
            schools: newSchool,
            queried: true,
            total: total
          });
        })
        .catch(error => {
          this.setState({ error: true });
        });
    }
  }

  schoolDetailsHandler(id, state) {
    this.setState({ selectedSchoolId: id });
    let currentSchool = this.state.schools;
    for (let i = 0; i < currentSchool.length; i++) {
      if (currentSchool[i].id === id) {
        this.setState({
          ...state,
          loadedSchool: currentSchool[i],
        });
      }
    }
  }

  toggleDetails(state) {
    this.setState({
      ...state,
      loadedSchool: null
    });
  }

  onToggleQuery(state) {
    this.setState({
      ...state,
      exceedance: !this.state.exceedance
    });
  }

  handleYearFilter(e, state) {
    this.setState({
      ...state,
      query3: e.target.value
    });
  }

  handleNameFilter(e, state) {
    this.setState({
      ...state,
      query1: e.target.value
    });
  }

  handleCountyFilter(e, state) {
    this.setState({
      ...state,
      query2: e.target.value
    });
  }


  handleNewSearch(state) {
    this.setState({
      ...state,
      total: 0
    });
  }

  render() {
    const toggleExceedanceOn = this.state.exceedance
      ? classes.toggleOn
      : classes.toggleOff;
    const toggleExceedanceOff = this.state.exceedance
      ? classes.toggleOff
      : classes.toggleOn;
    const title = this.state.exceedance
      ? "Only show schools with an exceedance"
      : "Search all schools";

    const detailsDisplay = (
      <div className={classes.detailBox}>
        <Details
          id={this.state.selectedSchoolId}
          loadedSchool={this.state.loadedSchool}
          closeDetails={e => this.toggleDetails(e)}
        />
      </div>
    );

    const resultsDisplay = (
      <div className={classes.previewBox}>
        <h4 className={classes.clickExpand}>
          Click the down arrow for school sample details:
        </h4>

        <p className={classes.clickExpand}>
          Schools matching search:{" "}
          <span className={classes.total}>{this.state.total}</span>
        </p>
        <List
          error={this.state.error}
          schools={this.state.schools}
          selectedSchoolId={this.state.selectedSchoolId}
          onSchoolSelect={id => this.schoolDetailsHandler(id)}
          loadedSchool={this.state.loadedSchool}
          queried={this.state.queried}
          toggleDetails={this.state.detailsSelected}
        />
      </div>
    );

    const search = (
      <div>
        <div className={classes.searchHeader}>
          <h3 className={classes.searchTitle}>Search by school name and/or county.</h3>

          <div className="row">
            <div id="col1" className="col-md-6">
              <h5>Filter search by year and/or exceedance.</h5>
            </div>
            <div className="col-md-6">
              <h5>
                Your search will return a result for each sample taken that
                matches the search criteria.
              </h5>
            </div>
          </div>
          <p>
            Most schools will have several results and results with no
            exceedance (lead less than 15ppb) will look the same, with lead =
            5ppb.
          </p>
        </div>
        <div className="footer">
          <div className="card white">
            <div className="card-content grey-text">
              <span className={classes.exceedanceTitle}>{title}</span>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  this.queryHandler(this.state.query1, this.state.query2);
                }}
              >
                <div className={classes.select}>
                  <label>Filter by year: </label>
                  <select
                    className="browser-default"
                    value={this.state.query3}
                    onChange={e => this.handleYearFilter(e)}
                  >
                    <option value="">ALL YEARS</option>
                    <option value="2017">2017</option>

                    <option value="2018">2018</option>

                    <option value="2019">2019</option>
                  </select>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Search..."
                    value={this.state.query1}
                    onChange={e => this.handleNameFilter(e)}
                  />
                  <label>Enter school name</label>

                  <input
                    type="text"
                    placeholder="Search..."
                    value={this.state.query2}
                    onChange={e => this.handleCountyFilter(e)}
                  />
                  <label>Enter county</label>
                </div>
                <div className="card-action">
                  <label className={classes.toggleBG}>
                    <span>
                      Filter by exceedance:{" "}
                    </span>
                    <div className={classes.exceedanceToggle}>
                    <span
                      onClick={event => this.onToggleQuery(event)}
                      className={toggleExceedanceOn}
                    >
                      On
                    </span>
                    <span
                      onClick={event => this.onToggleQuery(event)}
                      className={toggleExceedanceOff}
                    >
                      Off
                    </span>
                    </div>
                  </label>

                  <button
                    id="search"
                    className="btn waves-effect waves-light green"
                    type="submit"
                  >
                    <i className="large material-icons prefix">search</i>
                  </button>
                </div>
              </form>
              {this.state.total > 0 && (
                <Redirect
                  to={{
                    pathname: "/searchresults"
                  }}
                />
              )}
              <label>
                <h6 className={classes.searchFooter}>
                  Systems compare sample results from homes to EPA’s action
                  level of 0.015 mg/L (15 ppb). Exceeding the action level is
                  not a violation. Violations can be assessed if a system does
                  not perform certain required actions (e.g., public education
                  or lead service line replacement) after the action level is
                  exceeded. Other violations may also be assessed under the
                  rule. For example, if samples are collected improperly,
                  samples are not reported, or if treatment is done incorrectly.
                </h6>
              </label>
              <label> -The EPA Lead and Copper rule</label>
            </div>
          </div>
        </div>
      </div>
    );
    return (
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <div>
              <Splash
                seeMap={e => this.toggleMap(e)}
                mapViewStatus={this.state.map}
                startSearch={e => this.startSearch(e)}
              />
            </div>
          )}
        />
        <Route
          path="/search"
          exact
          render={() => (
            <div>
              {search}
            </div>
          )}
        />
        <Route
          path="/searchresults"
          exact
          render={() => (
            <div className={classes.display}>
              <NavLink to="/search">
                <button
                  id="searchToggle"
                  className="waves-effect waves-dark btn-small   blue-grey"
                  type="click"
                  onClick={e => this.handleNewSearch(e)}
                >
                  New Search
                </button>
              </NavLink>
              {resultsDisplay}
              {detailsDisplay}
            </div>
          )}
        />
      </Switch>
    );
  }
}

export default Search;
