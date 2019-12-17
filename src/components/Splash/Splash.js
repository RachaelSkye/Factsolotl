import React from "react";
import * as classes from "./Splash.module.css";
import Logo from "../Logo/Logo";
import facts from '../../pbdw.pdf';

const Splash = (props) => {
  return (
    <div className={classes.splash}>
      <Logo />
      <div>
        <h5>
          Factsolotl
        </h5>
        <p>Water quality fact finder</p>
      </div>
      <p>Use Factsolotl to search for lead results from tap water samples taken at public schools across California from 2017 to 2019.</p>
      <div>
        <h1>Dont't Panic</h1>
      </div>
      <p>Stay informed.</p>
      {/* <iframe title='dwFacts'src={facts} width="100%" height="400px">
    </iframe> */}
      <button 
      id='startSearch'
      type='click'
      className='btn'
      onClick={(e) => props.startSearch(e)}>Begin Search</button>
    </div>
  );
};

export default Splash;
