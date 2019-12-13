import React from "react";
import { connect } from "react-redux";
import "./details.css";

class Details extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m6">
            <div className="card">
              <div className="card-image">
                <div className="details">
                <button id='expand'
                  className="btn btn waves-effect waves-light teal lighten-2"
                  href="#"
                >
                  <i className="material-icons">chevron_right</i>
                </button>
                  <h2>{this.props.name}</h2>
                  <p>{this.props.district}</p>
                  <p>
                    Lead: {this.props.conc} {this.props.units}
                  </p>      
                </div>
              
              </div>
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
    name: state.name,
    district: state.district,
    conc: state.conc,
    units: state.units,
    queried: state.queried
  };
};

export default connect(mapStateToProps)(Details);
