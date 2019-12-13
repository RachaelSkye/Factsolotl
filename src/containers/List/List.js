import React from "react";
import { connect } from "react-redux";
import "./List.css";
import Details from "../details/details";

class List extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m4">
            <div className="card">
              {Object.keys(this.props.schools).map(function(schoolId) {
                let school = this.props.schools[schoolId];
                return(
                  <Details 
                  name= {school.name}
                  county= {school.county}
                  district= {school.district}
                  conc= {school.conc}
                  units= {school.units}
                  />
                )
                
              })}

              {/* <div className="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    schools: state.schools,
    name: state.name,
    district: state.district,
    county: state.county,
    conc: state.conc,
    units: state.units,
  };
};

export default connect(mapStateToProps)(List);
