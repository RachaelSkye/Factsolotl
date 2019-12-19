import React from "react";
import Preview from "../../components/Preview/Preview";
import * as classes from "./List.module.css";


const List = (props) => {
  let schools = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
  if (props.queried) {
    schools = props.schools.map(school => {
      
      return (
        <div >
        <Preview
          key={school.key}
          name={school.school_name}
          district={school.district}
          exceedance={school.action_level_exceedance}
          toggleDetails={school.toggleDetails}
          closeDetais={school.closeDetais}
          sampleLocation={school.school_site_name}
          clicked={() => props.onSchoolSelect(school.id)}
        />
        </div>
      );
    });
  } else {
    schools = 
    <div className={'card'}>
      <h1>search results</h1>
    </div>
  }
  return (
    <div className={classes.list}>
      {schools}
    </div>
  );
};

export default List;
