import React from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import "./preview.module.css";


class Preview extends React.Component {
  
  render() {
    
    const selectSchool = (id) => {
      id = this.props.schools.schoolId
        this.props.onToggleDetails(id) 
    }

    return (
      <div>
        <div className="row">
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <div className="details">
                <button 
                  onClick={selectSchool}

                  id='expand'
                  className="btn btn waves-effect waves-dark white">
                  
                  <i id='chevron' className="material-icons">chevron_right</i>
                </button>
                  <h5>{this.props.schools.name}</h5>
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
    schools: state.schools[0]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleDetails: (id) =>
    dispatch({
      type: actionTypes.TOGGLE_DETAILS,
      id: id
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
