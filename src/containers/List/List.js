import React from "react";
import Preview from "../../components/Preview/Preview";
import * as classes from "./List.module.css";

const List = (props) => {
  let schools = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
  if (props.queried) {
    schools = props.schools.map(school => {
      
      let exceedanceCheck = props.exceedanceCheck ? 'redBG' : 'greenBG'

      return (
        <div className={exceedanceCheck}>
        <Preview
          key={school.id}
          name={school.school_name}
          district={school.district}
          exceedance={school.action_level_exceedance}
          toggleDetails={school.toggleDetails}
          closeDetais={school.closeDetais}
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
