import React from "react";
import * as classes from "./Splash.module.css";
import "./Splash.module.css";
import Map from "../Map/Map";
import DontPanic from "../DontPanic/DontPanic";

const Splash = props => {
  return (
    <div className={classes.splash}>
      <div className={classes.info}>
        <h2 className={classes.title}>Factsolotl</h2>
        <p className={classes.content}>The water quality fact finder.</p>
        <h4 className={classes.content2}>
          Use Factsolotl to search for lead results from tap water samples taken
          at public schools across California from 2017 to 2019.
        </h4>

        <button
          type="click"
          className="btn green"
          onClick={e => props.startSearch(e)}
        >
          Begin Search
        </button>
      </div>
      <div className={classes.fortyTwo}>
        <h1>Don't Panic</h1>

        <p>Stay informed.</p>
      </div>

      <div className={classes.legend}>
        <label>
          The map below shows the number of samples, per county, had an
          exceedance. An exceedance is a lead result greater than 15ppb.
        </label>
        <br />
        <br />
        <label>Hover over a marker to see the county and numbers.</label>
      </div>
      <Map />
    </div>
  );
};

export default Splash;
