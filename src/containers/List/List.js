import React from "react";
import Preview from "../../components/Preview/Preview";
import * as classes from "./List.module.css";

const List = props => {
  let schools = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
  if (!props.error) {
    schools = props.schools.map(school => {
      return (
        <Preview
          key={school.id}
          name={school.school_name}
          district={school.district}
          exceedance={school.action_level_exceedance}
          clicked={() => props.onSchoolSelect(school.id)}
        />
      );
    });
  }

  return (
    <div className={classes.list}>
      {schools}
    </div>
  );
};

export default List;
