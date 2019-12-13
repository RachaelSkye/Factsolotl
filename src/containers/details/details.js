import React from "react";
import { connect } from "react-redux";
import "./details.css";

class Details extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <div className="details">
                <button id='expand'
                  className="btn btn waves-effect waves-dark white">
                  <i id='chevron' className="material-icons">chevron_right</i>
                </button>
                  <h5>{this.props.name}</h5>
                  {/* <p>School District: {this.props.district}</p>
                  <p>
                    Lead: {this.props.conc} {this.props.units}
                  </p>       */}
                </div>             
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
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
