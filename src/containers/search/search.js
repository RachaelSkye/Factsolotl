import React, { Component } from "react";
import axios from "axios";
import { v4 } from "uuid";
import List from "../List/List";
import Details from "../../components/Details/Details";
import "./Search.module.css";
import * as classes from "./Search.module.css";
import Splash from "../../components/Splash/Splash";
import Logo from "../../components/Logo/Logo";

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
    queried: false,
    detailsSelected: false,
    total: 0,
    beginSearch: false
  };

  queryHandler(query1, query2, state) {
    this.setState({
      ...state,
      query1: query1,
      qeury2: query2
    });

    let exceedanceQuery =
      "https://data.ca.gov/api/3/action/datastore_search?resource_id=5ebb2d68-1186-4937-acaf-8564c9a01ed6&q=" +
      this.state.query1 +
      ", " +
      this.state.query2 +
      ", " +
      this.state.query3 +
      ", yes";

    if (
      this.state.query1 === "" &&
      this.state.query2 === "" &&
      this.state.query3 === ""
    ) {
      alert("Please enter a query.");
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
              id: v4(),
              key: v4()
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
    } else {
      axios
        .get(
          "https://data.ca.gov/api/3/action/datastore_search?resource_id=5ebb2d68-1186-4937-acaf-8564c9a01ed6&q=" +
            this.state.query1 +
            ", " +
            this.state.query2 +
            ", " +
            this.state.query3
        )
        .then(response => {
          const schools = response.data.result.records;
          const total = response.data.result.total;

          if (schools.length === 0) {
            alert("No schools matched this search");
          }
          const newSchool = schools.map(school => {
            return {
              ...school,
              id: v4(),
              key: v4()

            };
          });

          this.setState({
            ...state,
            schools: newSchool,
            schoolQuery: true,
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
          detailsSelected: true
        });
      }
    }
  }

  toggleDetails(state) {
    this.setState({
      ...state,
      detailsSelected: !this.state.detailsSelected
    });
  }

  updateQuery(newQuery, state) {
    this.setState({
      ...state,
      query: newQuery
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

  toggleSearch(state) {
    this.setState({
      ...state,
      queried: !this.state.queried
    });
  }

  startSearch(state) {
    this.setState({
      ...state,
      beginSearch: true
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
      <div>
        <p>Click the down arrow for school sample details:</p>

        <label>Schools matching search: {this.state.total}</label>
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
        <p>
          Search by school name and/or county. Filter search by year and/or exceedance. Your search will return a result for each sample taken. Most schools will have several results and results with no exceedance (lead less than 15ppb) will look the same, with lead = 5ppb. 
        </p>
        <label>
          "Systems compare sample results from homes to EPA’s action level of
          Exceeding the action level is not a violation. Violations can be
          assessed if a system does not perform certain required actions (e.g.,
          public education or lead service line replacement) after the action
          level is exceeded. Other violations may also be assessed under the
          rule. For example, if samples are collected improperly, samples are
          not reported, or if treatment is done incorrectly."
        </label>
        <label> -The EPA Lead and Copper rule</label>
      
  
        <div className="footer">
          <div className="card white">
            <div className="card-content grey-text">
              <span className="card-title">{title}</span>
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
                    onChange={e => this.setState({ query1: e.target.value })}
                  />
                  <label>Enter school name</label>

                  <input
                    type="text"
                    placeholder="Search..."
                    value={this.state.query2}
                    onChange={e => this.setState({ query2: e.target.value })}
                  />
                  <label>Enter county</label>
                </div>
                <div className="card-action">
                  <label>
                    <span className={"exceedanceToggle"}>
                      Filter by exceedance:{" "}
                    </span>
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
            </div>
          </div>
        </div>
      </div>
    );
    if (!this.state.beginSearch) {
      return (
        <div>
          <Splash startSearch={e => this.startSearch(e)} />
        </div>
      );
    }

    if (!this.state.queried) {
      return (
        <div>
          <Logo />
          {search}
        </div>
      );
    } else if (this.state.queried && !this.state.detailsSelected) {
      return (
        <div className={classes.display}>
          <Logo />
          <button
            id="searchToggle"
            className="waves-effect waves-dark btn-small   blue-grey"
            type="click"
            onClick={e => this.toggleSearch(e)}
          >
            New Search
          </button>
          {resultsDisplay}
        </div>
      );
    } else {
      return (
        <div className={classes.display}>
          <Logo />

          <button
            id="searchToggle"
            className="waves-effect waves-dark btn-small   blue-grey"
            type="click"
            onClick={e => this.toggleSearch(e)}
          >
            New Search
          </button>
          {resultsDisplay}
          {detailsDisplay}
        </div>
      );
    }
  }
}

export default Search;
