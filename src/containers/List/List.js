import React from "react";
import { connect } from "react-redux";
import "./List.css";
import Details from '../details/details';

class List extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m6">
            <div className="card">
              this.props.schools.map(school => 
                <Details 
                
                
                
                />
              )
              
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
    
  };
};

export default connect(mapStateToProps)(List);
