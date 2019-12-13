import React from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import "./preview.module.css";


class Preview extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <div className="details">
                <button 
                  onClick={this.props.onToggleDetails}

                  id='expand'
                  className="btn btn waves-effect waves-dark white">
                  
                  <i id='chevron' className="material-icons">chevron_right</i>
                </button>
                  <h5>{this.props.name}</h5>
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
    queried: state.queried,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleDetails: () =>
    dispatch({
      type: actionTypes.TOGGLE_DETAILS,
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
