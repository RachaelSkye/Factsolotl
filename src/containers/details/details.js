import React from "react";
import { connect } from "react-redux";
import "./details.css";

const Details = () => {
  
    return (
      <div>
        <div className="row">
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <div className="details">
                  <p>School District: {this.props.district}</p>
                  <p>
                    Lead: {this.props.conc} {this.props.units}
                  </p>      
                </div>             
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  
}

const mapStateToProps = state => {
  return {
    name: state.name,
    district: state.district,
    conc: state.conc,
    units: state.units,
    queried: state.queried
  };
};

export default connect(mapStateToProps)(Details);
