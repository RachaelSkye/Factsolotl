import React from "react";
import { connect } from "react-redux";
import "./details.css";

const Details = () => {

  for (let i = 0; i < this.props.schools.length; i++) {
    if(this.props.currentSchoolId === this.props.schools[i].schoolId) {
      return (
        <div>
          <div className="row">
            <div className="col s12 m4">
              <div className="card">
                <div className="card-image">
                  <div className="details">
                    <p>School District: {this.props.schools[i].district}</p>
                    <p>
                      Lead: {this.props.schools[i].conc} {this.props.schools[i].units}
                    </p>      
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
    schools: this.state.schools,
    queried: state.queried,
    currentSchoolId: state.currentSchoolId
  };
};

export default connect(mapStateToProps)(Details);
