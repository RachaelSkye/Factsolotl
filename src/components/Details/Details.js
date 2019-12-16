import React from "react";
import * as classes from "./Details.css";

const Details = props => {
  let school = (
    <div className={"cardDetail"}>
      <div className="card">
        <div className="card-image">
          <h1>school details</h1>
        </div>
      </div>
    </div>
  );
  if (props.loadedSchool) {
    const sampleDate = new Date(props.loadedSchool.sample_date);
    const sampleYear = sampleDate.getFullYear();
    const sampleMonth = sampleDate.getMonth() + 1;
    school = (
        <div className={classes.cardDetail}>
          <div className="card">
              <h4>{props.loadedSchool.school_name}</h4>
              <p>School district: {props.loadedSchool.district}</p>
              <p>Exceedance: {props.loadedSchool.action_level_exceedance}</p>
              <p>Lead concentration: {props.loadedSchool.result} ppb</p>
              <p>
                Date sampled: {sampleMonth}/{sampleYear}
              </p>
              <p>Water system: {props.loadedSchool.water_system_name}</p>
          </div>
        </div>
    );
  }
  return school;
};

export default Details;
