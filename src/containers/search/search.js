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
    exceedance: false,
    exceedanceCheck: false,
    queried: false
  };

  queryHandler(query, state) {
    this.setState({
      ...state,
      query: query
    });


    let exceedanceQuery =  "https://data.ca.gov/api/3/action/datastore_search?resource_id=5ebb2d68-1186-4937-acaf-8564c9a01ed6&q=" +
    this.state.query + ' yes'

    if (this.state.query === "") {
      alert("Please enter a query.");
    } else if (this.state.exceedance) {
      axios
        .get(
          exceedanceQuery
        )
        .then(response => {
          const schools = response.data.result.records;
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
            queried: true
          });
        })
        .catch(error => {
          this.setState({ error: true });
        });
    } else {
      axios
      .get(
        "https://data.ca.gov/api/3/action/datastore_search?resource_id=5ebb2d68-1186-4937-acaf-8564c9a01ed6&q=" +
    this.state.query
      )
      .then(response => {
        const schools = response.data.result.records;
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
          queried: true
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

    const results = () => {
      if (this.state.loadedSchool !== null) {
        return (
          <div>
            <Details
              id={this.state.selectedSchoolId}
              loadedSchool={this.state.loadedSchool}
            />
          </div>
        );
      } else {
        return (
          <div className={classes.list}>
            <List
              error={this.state.error}
              schools={this.state.schools}
              selectedSchoolId={this.state.selectedSchoolId}
              onSchoolSelect={id => this.schoolDetailsHandler(id)}
              loadedSchool={this.state.loadedSchool}
            />
          </div>
        );
      }
    };

    return (
      <div>
            <Details
              id={this.state.selectedSchoolId}
              loadedSchool={this.state.loadedSchool}
            />
            <List
              error={this.state.error}
              schools={this.state.schools}
              selectedSchoolId={this.state.selectedSchoolId}
              onSchoolSelect={id => this.schoolDetailsHandler(id)}
              loadedSchool={this.state.loadedSchool}
              queried={this.state.queried}
            />

        <div className="footer">
          <div className="card white">
            <div className="card-content grey-text">
              <span className="card-title">{title}</span>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  this.queryHandler(this.state.query);
                }}
              >
                <input
                  type="text"
                  placeholder="Search..."
                  value={this.state.query}
                  onChange={e => this.setState({ query: e.target.value })}
                />
                <div className="card-action">
                  <div className="switch">
                    <label>
                      <span className={'exceedanceToggle'}>Filter by exceedance: </span>
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
