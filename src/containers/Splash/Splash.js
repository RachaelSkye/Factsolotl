import React from "react";
import * as classes from "./Splash.module.css";
import "./Splash.module.css";
import Map from "../../components/Map/Map";
import { NavLink } from "react-router-dom";

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
        <NavLink to="/search">
          <button  className="btn waves-effect waves-light green">Begin Search</button>
        </NavLink>
      </div>
      <div className={classes.fortyTwo}>
        <h1>Don't Panic</h1>

        <p>Stay informed.</p>
      </div>

      <div className={classes.legend}>
        <label>
          The <span className={classes.highlightMap}>map</span> shows the number
          of samples, per county, that had a lead result greater than 15ppb.
        </label>
        <br />
        <br />
        <label>Hover over a marker for info.</label>
      </div>
      <Map />
    </div>
  );
};

export default Splash;
