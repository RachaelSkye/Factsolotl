import React from "react";
import * as classes from "./Details.css";
import facts from "../../pbdw.pdf";


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
    const sampleDay = sampleDate.getDate();

    school = (
        <div className={classes.cardDetail}>
          <div className="card">
          <button
                  onClick={(e) => props.closeDetails(e)}
                  id="closeBtn"
                  className="btn btn waves-effect waves-dark white">
                  <i id="close" className="material-icons">
                    close
                  </i>
                </button>
              <h4>{props.loadedSchool.school_name}</h4>
              <p>School district: {props.loadedSchool.district}</p>
              <p>Exceedance: {props.loadedSchool.action_level_exceedance}</p>
              <p>Lead concentration: {props.loadedSchool.result} ppb</p>
              <p>Sampled from: {props.loadedSchool.school_site_name}</p>
              <p>
                Date sampled: {sampleMonth}/{sampleDay}/{sampleYear}
              </p>
              <p>Water system: {props.loadedSchool.water_system_name}</p>
          </div>
          <p>Learn more about the EPA lead rule:</p>
          <iframe
        className={classes.pdf}
        title="dwFacts"
        src={facts}
        width="100%"
        height="700px"
      ></iframe>
        </div>
    );
  }
  return school;
};

export default Details;
