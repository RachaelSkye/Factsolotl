import React from "react";
import * as classes from "./Splash.module.css";
import './Splash.module.css';
import Map from "../Map/Map";
import DontPanic from '../DontPanic/DontPanic';

const Splash = props => {
  return (
    <div className={classes.splash}>
     

      <div className={classes.info}>
        <h5>Factsolotl</h5>
        <p>The water quality fact finder.</p>

        <p>
          Use Factsolotl to search for lead results from tap water samples taken
          at public schools across California from 2017 to 2019.
        </p>
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
        <Map />
      
    </div>
  );
};

export default Splash;
