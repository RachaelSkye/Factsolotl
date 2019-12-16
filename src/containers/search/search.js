import React, { Component } from "react";
import axios from "axios";
import { v4 } from "uuid";
import List from "../List/List";
import Details from "../../components/Details/Details";
import "./Search.module.css";
import * as classes from "./Search.module.css";

class Search extends Component {
  state = {
    schools: [],
    selectedschoolId: "",
    error: false,
    loadedSchool: null,
    query: "",
    query1: "",
    query2: "",
    query3: "",
    exceedance: false,
    exceedanceCheck: false,
    queried: false,
    total: 0
  };

  queryHandler(query1, query2, query3, state) {
    this.setState({
      ...state,
      query1: query1,
      qeury2: query2,
      query3: query3
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
          const schools = response.data.result.records;
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
              id: v4()
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
          loadedSchool: currentSchool[i]
        });
      }
    }
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

    return (
      <div>
              <div className={classes.detailBox}>
              <label>School details:</label>
              <Details
                id={this.state.selectedSchoolId}
                loadedSchool={this.state.loadedSchool}
              />
              </div>
          
              <label>Schools matching search:</label>
              <List
                error={this.state.error}
                schools={this.state.schools}
                selectedSchoolId={this.state.selectedSchoolId}
                onSchoolSelect={id => this.schoolDetailsHandler(id)}
                loadedSchool={this.state.loadedSchool}
                queried={this.state.queried}
              />
       

        <label>Number of schools matching search: {this.state.total}</label>

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
  }
}

export default Search;
