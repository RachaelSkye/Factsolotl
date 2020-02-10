import React from "react";
import axios from "axios";
import { v4 } from "uuid";
import List from "../List/List";
import Details from "../../components/Details/Details";
import "./Search.module.css";
import * as classes from "./Search.module.css";
import "./Search.module.css";
import Splash from "../Splash/Splash";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

class Search extends React.Component {
  state = {
    schools: [],
    selectedschoolId: "",
    loadedSchool: null,
    query1: "",
    query2: "",
    query3: "",
    exceedance: false,
    exceedanceCheck: false,
    total: 0,
    info: false,
    loading: false
  };

  queryHandler(state) {
    this.setState({ loading: true });

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
      this.setState({ loading: false });
      alert(
        "Please select a year or enter an input in one of the search fields."
      );
    } else if (!this.state.exceedance) {
      axios
        .get(baseQuery)
        .then(response => {
          this.setState({ loading: false });
          let schools = response.data.result.records;
          const total = response.data.result.total;

          if (schools.length === 0) {
            this.setState({ loading: false });
            alert("No schools matched this search");
          }
          const newSchool = schools.map(school => {
            return {
              ...school,
              id: v4()
            };
          });
          this.setState({
            schools: newSchool,
            queried: true,
            total: total
          });
        })
        .catch(error => {
          this.setState({ loading: false });
          alert('Something went wrong!')
          console.log(error);
          
        });
    } else if (this.state.exceedance) {
      this.setState({ loading: true });

      axios
        .get(exceedanceQuery)
        .then(response => {
          this.setState({ loading: false });
          let schools = response.data.result.records;
          const total = response.data.result.total;

          if (schools.length === 0) {
            this.setState({ loading: false });
            alert("No schools matched this search");
          }
          const newSchool = schools.map(school => {
            return {
              ...school,
              id: v4()
            };
          });

          this.setState({
            schools: newSchool,
            queried: true,
            total: total
          });
        })
        .catch(error => {
          this.setState({ loading: false });
          alert('Something went wrong!')
          console.log(error);
        });
    }
  }

  schoolDetailsHandler(id, state) {
    this.setState({ selectedSchoolId: id });
    let currentSchool = this.state.schools;
    for (let i = 0; i < currentSchool.length; i++) {
      if (currentSchool[i].id === id) {
        this.setState({
          loadedSchool: currentSchool[i]
        });
      }
    }
  }

  toggleDetails(state) {
    this.setState({
      loadedSchool: null
    });
  }

  onToggleQuery(state) {
    this.setState({
      exceedance: !this.state.exceedance
    });
  }

  handleYearFilter(e, state) {
    this.setState({
      query3: e.target.value
    });
  }

  handleNameFilter(e, state) {
    this.setState({
      query1: e.target.value
    });
  }

  handleCountyFilter(e, state) {
    this.setState({
      query2: e.target.value
    });
  }

  handleNewSearch(state) {
    this.setState({
      total: 0,
      loadedSchool: null
    });
  }
  openInfoHandler() {
    this.setState({ info: true });
  }
  closeInfoHandler() {
    this.setState({ info: false });
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

    const detailsDisplay = this.state.loadedSchool && (
      <div className={classes.modal}>
        <div className={classes.detailBox}>
          <Details
            id={this.state.selectedSchoolId}
            loadedSchool={this.state.loadedSchool}
            closeDetails={e => this.toggleDetails(e)}
          />
        </div>
      </div>
    );

    const info = this.state.info && (
      <div className={classes.modal}>
        <div className={classes.detailBox}>
          <div className={classes.infoBox}>
            <button
              className="btn-floating btn-sm waves-effect waves-light grey"
              onClick={e => this.closeInfoHandler(e)}
            >
              <i className="material-icons">close</i>
            </button>
            <h5>What is an exceedance?</h5>
            <p>
              {" "}
              "Systems compare sample results from homes to EPA’s action level
              of 0.015 mg/L (15 ppb). Exceeding the action level is not a
              violation. Violations can be assessed if a system does not perform
              certain required actions (e.g., public education or lead service
              line replacement) after the action level is exceeded. Other
              violations may also be assessed under the rule. For example, if
              samples are collected improperly, samples are not reported, or if
              treatment is done incorrectly."
              <br />
              <label>-The Lead and Copper rule</label>
            </p>

            <p>Understanding the EPA’s lead and copper rule:</p>
            <ul>
              <li>
                <a
                  href="https://www.epa.gov/sites/production/files/2019-10/documents/lcr101_factsheet_10.9.19.final_.2.pdf"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  A quick guide.
                </a>
              </li>
              <li>
                <a
                  href="https://nepis.epa.gov/Exe/ZyPDF.cgi?Dockey=60001N8P.txt"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Dig a little deeper.
                </a>
              </li>
            </ul>
            <hr />
            <h5>Find out more about the data that powers this app:</h5>
            <p>
              {" "}
              "The Division of Drinking Water (DDW), in collaboration with the
              California Department of Education, has taken the initiative to
              begin testing for lead in drinking water at all public K-12
              schools."
            </p>
            <a
              href="https://data.ca.gov/dataset/drinking-water-results-of-lead-sampling-of-drinking-water-in-california-schools"
              rel="noopener noreferrer"
              target="_blank"
            >
              CA.gov Open Data Portal
            </a>
          </div>
        </div>
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

    const spinner = (
      <div className={classes.spinner}>
        <div className="preloader-wrapper small active">
          <div className="spinner-layer spinner-blue">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>

          <div className="spinner-layer spinner-red">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>

          <div className="spinner-layer spinner-yellow">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>

          <div className="spinner-layer spinner-green">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    );

    const searchButton = (
      <button
        id="search"
        className="btn waves-effect waves-light green"
        type="submit"
      >
        <i className="large material-icons prefix">search</i>
      </button>
    );
    const searchLoading = this.state.loading ? spinner : searchButton;
    const search = (
      <div>
        {info}
        <div className={classes.searchHeader}>
          <button
            id="infoIcon"
            type="click"
            onClick={e => this.openInfoHandler(e)}
            className="btn-floating btn-sm waves-effect waves-light transparent"
          >
            <i className="material-icons">info</i>
          </button>
          <h3 className={classes.searchTitle}>
            Search by school name and/or county.
          </h3>

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
                    <span>Filter by exceedance: </span>
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
                  {searchLoading}
                </div>
              </form>
              {this.state.total > 0 && (
                <Redirect
                  to={{
                    pathname: "/Factsolotl/searchresults"
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
    return (
      <Switch>
        <Route
          path="/Factsolotl/"
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
        <Route path="/Factsolotl/search" exact render={() => <div>{search}</div>} />
        <Route
          path="/Factsolotl/searchresults"
          exact
          render={() => (
            <div className={classes.display}>
              <NavLink to="/Factsolotl/search">
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
