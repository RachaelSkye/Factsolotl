import React from "react";
import * as classes from "./navbar.module.css";
import Logo from '../Logo/Logo';

const Nav = () => {
  return (
    <div className={classes.nav}>
     <Logo/>
    </div>
  );
};

export default Nav;
