import React from "react";
import factsolotl from "../../img/bubbleF.png";
import * as classes from "./Logo.module.css";

const Nav = () => {
  return (
      <div className={classes.logo}>
        <a
          href="https://www.scientificamerican.com/article/biologys-beloved-amphibian-the-axolotl-is-racing-toward-extinction1/"
          rel="noopener noreferrer"
          target="_blank">
          <img
            className={classes.leftLogo}
            src={factsolotl}
            alt="A pink cartoon axolotl"/>
        </a>
      </div>
  );
};

export default Nav;
