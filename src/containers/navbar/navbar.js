import React from "react";
import * as classes from "./navbar.module.css";
import Logo from "../../components/Logo/Logo";


const Nav = (props) => {

  let home = (
    <button
          id='home'
          type="click"
          className="btn-floating btn-large waves-effect waves-light transparent"
          onClick={e => props.startSearch(e)}
        >
         <i id='homeIcon'className="material-icons">home</i>
        </button>
  );

  if(props.searchStatus) {
    return (
      <div className={classes.nav}>
        <Logo />
        {home}
      </div>
  );
  } else {
    return (
      <div className={classes.nav}>
        <Logo />
      </div>
    );
  }

};

export default Nav;
