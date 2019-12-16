import React from "react";
import "./Details.css";

const Details = props => {
  let school = (
    <div>
      <p className="FullPost">Please select a school!</p>
    </div>
  );
  if (props.loadedSchool) {
    school = (
      <div>
        <div className="row">
          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <div className="details">
                  <h1>{props.loadedSchool.school_name}</h1>
                  <p>{props.loadedSchool.district}</p>
                  <p>{props.loadedSchool.id}</p>
                  <p>{props.loadedSchool.result}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return school;
};

export default Details;
