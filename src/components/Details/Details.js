import React from "react";
import "./Details.css";

const Details = props => {
  let school = (
    <div className={'cardDetail'}>
    <div className="card">
      <div className="card-image">
          <h1>school details</h1>
      </div>
    </div>
</div>

  );
  if (props.loadedSchool) {
    school = (
      <div className={'cardDetail'}>
            <div className="card">
              <div className="card-image">
                  <h1>{props.loadedSchool.school_name}</h1>
                  <p>{props.loadedSchool.district}</p>
                  <p>{props.loadedSchool.id}</p>
                  <p>{props.loadedSchool.result}</p>
              </div>
            </div>
      </div>
    );
  }
  return school;
};

export default Details;
