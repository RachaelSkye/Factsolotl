import React from "react";
import * as classes from "./Map.module.css";

const Map = props => {
  return (
    <div>
      <div id="chart_div" className={classes.map}></div>
    </div>
  );
};

export default Map;
