import React from 'react';
import factsolotl from '../../img/factsolotl.png';
import './navbar.css';

const Nav = () => {
  return(
    <div className='nav'>
      <a  href="https://www.scientificamerican.com/article/biologys-beloved-amphibian-the-axolotl-is-racing-toward-extinction1/" rel="noopener noreferrer" target="_blank"><img className="left-logo" src={factsolotl} alt="A pink cartoon axolotl"/></a>
      <ul>
        {/* <li><button className='btn'>HOME</button></li> */}
      </ul>
    </div>
  );
}

export default Nav