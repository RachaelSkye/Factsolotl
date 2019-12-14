import React from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions";
import "./preview.module.css";


class Preview extends React.Component {
  
  render() {
    for (let i = 0; i < this.props.schools.length; i++){
       
       const selectSchool = (id) => {
        id = this.props.schools[i].schoolId
        this.props.setId(id)
        if(this.props.schools[i].schoolId === this.props.currentSchoolId)
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
                    <h5>{this.props.schools[i].name}</h5>
                  </div>             
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  
    }
    
  }
}

const mapStateToProps = state => {
  return {
    schools: state.schools
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleDetails: (id) =>
    dispatch({
      type: actionTypes.TOGGLE_DETAILS,
      id: id
    }),
    setId: (id) =>
    dispatch({
      type: actionTypes.SET_CURRENT_SCHOOL_ID,
      id: id
    })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
