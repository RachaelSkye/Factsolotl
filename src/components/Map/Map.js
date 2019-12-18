import React from "react";
import * as classes from "./Map.module.css";

const Map = props => {
  return (
    <div>
      <p className={classes.mapLabel}>Exceedences by county:</p>

      <div id="chart_div" className={classes.map}></div>
    </div>
  );
};

export default Map;
