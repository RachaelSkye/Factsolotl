import React from "react";
import * as classes from "./Splash.module.css";
import facts from "../../pbdw.pdf";
import Map from "../Map/Map";

const Splash = props => {

  let pdf = (
    <iframe title="dwFacts" src={facts} width="100%" height="350px"></iframe>
  );

  let map = (
    <div>
      <Map />
    </div>
  );

  let toggleView = props.mapViewStatus ? map : pdf;

  return (
    <div className={classes.splash}>
      <div>
        <h5>Factsolotl</h5>
        <p>Water quality fact finder</p>
      </div>
      <p>
        Use Factsolotl to search for lead results from tap water samples taken
        at public schools across California from 2017 to 2019.
      </p>
      <div>
        <h1>Dont't Panic</h1>
      </div>
      <p>Stay informed.</p>
      <button
        id="startSearch"
        type="click"
        className="btn"
        onClick={e => props.seeMap(e)}
      >
        See Map
      </button>
      <button
        id="startSearch"
        type="click"
        className="btn"
        onClick={e => props.startSearch(e)}
      >
        Begin Search
      </button>
      {toggleView}
      <Map />
    </div>
  );
};

export default Splash;
