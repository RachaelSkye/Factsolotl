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
                  <p>School district: {props.loadedSchool.district}</p>
                  <p>Exceedance: {props.loadedSchool.action_level_exceedance}</p>
                  <p>Lead concentration: {props.loadedSchool.result} ppb</p>
                  <p>Date sampled: {props.loadedSchool.sample_date}</p>
                  <p>Water system: {props.loadedSchool.water_system_name}</p>

              </div>
            </div>
      </div>
    );
  }
  return school;
};

export default Details;
